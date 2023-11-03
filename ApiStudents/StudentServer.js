const sql = require('mssql/msnodesqlv8');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { name } = require('ejs');
const { VarChar } = require('msnodesqlv8');

// Configuración de conexión a SQL Server
const config = {
  server: 'UZIEL\\SQLEXPRESS',
  database: 'ESTUDENTSSCHOOL',
  options: {
    trustedConnection: true, // Habilita la autenticación de Windows
  },
};

const pool = new sql.ConnectionPool(config);

// Crear la conexión al pool de SQL Server
const poolConnect = pool.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rutas para estudiantes
app.get('/api/students', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Student');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener la lista de estudiantes:', error);
    res.status(500).json({ error: 'Error al obtener la lista de estudiantes' });
  }
});

app.get('/api/students/:id/grades', async (req, res) => {
  const studentId = req.params.id;
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('id', sql.Int, studentId)
      .query('SELECT * FROM Grades WHERE StudentId = @id');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener las calificaciones del estudiante:', error);
    res.status(500).json({ error: 'Error al obtener las calificaciones del estudiante' });
  }
});

app.post('/api/students', async (req, res) => {
  const newStudent = req.body;
  console.log("Cuerpo de la solicitud POST:", newStudent);

  try {
    const pool = await sql.connect(config);

    // Insertar el nuevo estudiante en la tabla Student
    const studentInsertResult = await pool
      .request()
      .input('name', sql.VarChar(50), newStudent.name)
      .input('age', sql.Int, newStudent.age)
      .query('INSERT INTO Student (NameStudent, Age) OUTPUT INSERTED.Id_Student VALUES (@name, @age)');

    const newStudentId = studentInsertResult.recordset[0].Id_Student;

    // Insertar calificaciones en la tabla Grades
    if (newStudent.grades && newStudent.grades.length > 0) {
      for (const grade of newStudent.grades) {
        await pool
          .request()
          .input('studentId', sql.Int, newStudentId)
          .input('course', sql.VarChar(50), grade.course)
          .input('score', sql.Decimal(5, 2), grade.score)
          .query('INSERT INTO Grades (StudentId, Course, Score) VALUES (@studentId, @course, @score)');
      }
    }

    res.json({ id: newStudentId });
  } catch (error) {
    console.error('Error al crear un nuevo estudiante:', error);
    res.status(500).json({ error: 'Error al crear un nuevo estudiante' });
  }
});


app.put('/api/students/:id', async (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;
  try {
    const pool = await sql.connect(config);

    // Actualizar los datos personales del estudiante en la tabla Student
    const studentUpdateResult = await pool
      .request()
      .input('id', sql.Int, studentId)
      .input('name', sql.VarChar(50), updatedStudent.name)
      .input('age', sql.Int, updatedStudent.age)
      .query('UPDATE Student SET NameStudent = @name, Age = @age WHERE Id_Student = @id');

    // Actualizar las calificaciones del estudiante en la tabla Grades
    if (updatedStudent.grades && updatedStudent.grades.length > 0) {
      for (const grade of updatedStudent.grades) {
        await pool
          .request()
          .input('studentId', sql.Int, studentId)
          .input('course', sql.VarChar(50), grade.course)
          .input('score', sql.Decimal(5, 2), grade.score)
          .query('UPDATE Grades SET Score = @score WHERE StudentId = @studentId AND Course = @course');
      }
    }

    res.json({ message: 'Estudiante actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el estudiante:', error);
    res.status(500).json({ error: 'Error al actualizar el estudiante' });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const pool = await sql.connect(config);

    // Eliminar las calificaciones del estudiante de la tabla Grades
    await pool
      .request()
      .input('studentId', sql.Int, studentId)
      .query('DELETE FROM Grades WHERE StudentId = @studentId');

    // Eliminar la información personal del estudiante de la tabla Student
    await pool
      .request()
      .input('id', sql.Int, studentId)
      .query('DELETE FROM Student WHERE Id_Student = @id');

    res.json({ message: 'Estudiante y calificaciones eliminados exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el estudiante:', error);
    res.status(500).json({ error: 'Error al eliminar el estudiante' });
  }
});


// Iniciar el servidor
const server = app.listen(5001, () => {
  console.log('Servidor Express en funcionamiento en el puerto 5001.');
});
