package ReactSpringProject.ReactSpring.Mapper;

import ReactSpringProject.ReactSpring.Dto.StudentDto;
import ReactSpringProject.ReactSpring.Model.Student;

public class StudentMapper {
    public static StudentDto mapToStudentDto(Student stud){
        return new StudentDto(
                stud.getId(),
                stud.getName(),
                stud.getEmail()
        );
    }

    public static  Student mapToStudent(StudentDto studDto){
        return new Student(
                studDto.getId(),
                studDto.getName(),
                studDto.getEmail()
        );
    }
}
