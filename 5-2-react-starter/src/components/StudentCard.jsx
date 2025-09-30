function StudentCard({name, id, department}){
    return <div>
        <h3>
            {name}
        </h3>
        <p>Id: {id}</p>
        <p>Department: {department}</p>
    </div>
}

export default StudentCard;