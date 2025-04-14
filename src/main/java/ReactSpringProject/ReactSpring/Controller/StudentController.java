package ReactSpringProject.ReactSpring.Controller;

import ReactSpringProject.ReactSpring.Dto.StudentDto;
import ReactSpringProject.ReactSpring.Model.Student;
import ReactSpringProject.ReactSpring.Service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/students")
@CrossOrigin("*")
public class StudentController {
    @Autowired
    StudentService service;

    @PostMapping
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
        StudentDto st=service.createStudent(studentDto);
        return new ResponseEntity<>(st, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long studId){
        StudentDto studentDto=service.getStudentById(studId);
        return ResponseEntity.ok(studentDto);
    }

    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents(){
        List<StudentDto> studentList=service.getAllStudents();
        return ResponseEntity.ok(studentList);
    }

    @PutMapping("{id}")
    public ResponseEntity<StudentDto> updateStudentById(@RequestBody StudentDto studentDto,@PathVariable Long id){
        StudentDto studDto=service.updateStudentById(studentDto,id);
        return ResponseEntity.ok(studDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudentById(@PathVariable Long id){
        service.deleteStudentById(id);
        return ResponseEntity.ok("Student Deleted Sucessfully with given id:"+id);
    }
}
