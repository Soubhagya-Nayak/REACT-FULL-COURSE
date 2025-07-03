export const Practices = () => {
    const student = [];
    return (
        <>
            {/* <p>{student.length && "Student not found"}</p> */}
            {/* 1st Solution */}
            {/* <p>{student.length === 0 && "Student not found"}</p> */}
            
            {/* 2nd Solution */}
            {/* <p>{!student.length && "Student not found"}</p> */}

            {/* 3rd Solution */}
            {/* <p>{!Boolean(student.length) && "Student not found"}</p> */}
            <p>{Boolean(!student.length) && "Student not found"}</p>
            <p>Student length: {student.length}</p>
        </>
    );
}