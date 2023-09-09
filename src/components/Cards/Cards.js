import './Cards.css'
export default function Cards(props) {

    const {title, description,img} = props;
    return (
        <>
            <div className="card custom-card bg-grey-200">
                <img src={img} className="card-img-top h-30" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center fs-4 fw-1">{title}</h5>
                    <p className="card-text text-center">{description}</p>
                    <div className='flex justify-between mt-3'>
                  <a href="https://github.com/yogita-s-24/todoapp-practice" className="btn btn-dark">Github URL</a>
                    <a href="https://todo-app-dtfn.onrender.com/" className="btn btn-dark ">Live Demo</a> 
                    </div>
                </div>
            </div>
        </>
    )
}















