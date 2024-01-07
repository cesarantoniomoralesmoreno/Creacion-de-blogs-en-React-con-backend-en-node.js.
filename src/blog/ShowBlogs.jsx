import axios from "axios";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () =>{
    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        getBlogs();
    },[]);

    //Procedimiento para mostrar todos los blogs:

    const getBlogs = async () =>{
        const res = await axios.get(URI);//Nos conectamos a nuestro backend con axios le pasamos la URI
        setBlogs(res.data);//Podemos acceder con res.data
    }

    //Procedimiento para eliminar un blog, se pasa el id para determinar el blog que se va a eliminar
    const deleteBlog = async (id) =>{
        axios.delete(`${URI}${id}`);
        getBlogs();
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/create" className="btn btn-primary mt-2 mb-2"><i class="fa-solid fa-plus"></i> Create</Link>
                        <table className="table">
                            <thead className="table-primary">
                                    <tr>
                                        <th>Title</th>
                                        <th>Content</th>
                                        <th>Actions</th>
                                    </tr>
                            </thead>
                            <tbody>
                                {blogs.map ( (blog)=>(
                                    <tr key={ blog.id }>
                                        <td>{ blog.title }</td>
                                        <td>{ blog.content }</td>
                                        <td>
                                            <Link to={`/edit/${blog.id}`} className="btn btn-info"><i class="fa-solid fa-pen-to-square"></i> Edit</Link>
                                            <button onClick={()=>deleteBlog(blog.id)} className="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs;