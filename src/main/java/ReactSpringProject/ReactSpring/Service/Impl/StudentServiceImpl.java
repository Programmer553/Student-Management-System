package ReactSpringProject.ReactSpring.Service.Impl;

import ReactSpringProject.ReactSpring.Dto.StudentDto;
import ReactSpringProject.ReactSpring.Exception.ResourceNotFoundException;
import ReactSpringProject.ReactSpring.Mapper.StudentMapper;
import ReactSpringProject.ReactSpring.Model.Student;
import ReactSpringProject.ReactSpring.Repository.StudentRepository;
import ReactSpringProject.ReactSpring.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    StudentRepository repository;
    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student stud= StudentMapper.mapToStudent(studentDto);
        Student st=repository.save(stud);
        return StudentMapper.mapToStudentDto(st);
    }

    @Override
    public StudentDto getStudentById(Long id) {

        Student student=repository.findById(id).orElseThrow(
                ()->new ResourceNotFoundException("Not Found Student with given id: "+id));
        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents(){
        List<Student> studList=repository.findAll();
        return studList.stream().map(
                (student)->StudentMapper.mapToStudentDto(student)).collect(Collectors.toList());
    }
    @Override
    public StudentDto updateStudentById(StudentDto studentDto,Long id){
        Student student=repository.findById(id).orElseThrow(()->new ResourceNotFoundException("Not Found Student by this id: "+id));

        student.setId(id);
        student.setName(studentDto.getName());
        student.setEmail(studentDto.getEmail());
        Student saved=repository.save(student);
        return StudentMapper.mapToStudentDto(saved);
    }

    @Override
    public void deleteStudentById(Long id){
        Student student=repository.findById(id).orElseThrow(()->new ResourceNotFoundException("Not found Student with given Id : "+id));
        repository.deleteById(id);
    }
}
