package ReactSpringProject.ReactSpring.Service;

import ReactSpringProject.ReactSpring.Dto.StudentDto;
import ReactSpringProject.ReactSpring.Model.Student;

import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);
    StudentDto getStudentById(Long id);
    List<StudentDto> getAllStudents();
    StudentDto updateStudentById(StudentDto studentDto,Long id);
    void deleteStudentById(Long id);
}
