package ReactSpringProject.ReactSpring.Repository;

import ReactSpringProject.ReactSpring.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {
}
