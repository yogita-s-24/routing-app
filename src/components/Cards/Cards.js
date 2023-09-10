import './Cards.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
export default function Cards(props) {

    const {title, description,img,githubUrl,liveUrl} = props;
    return (
        <>
            <div className="card custom-card bg-grey-200">
                <img src={img} className="card-img-top h-30" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center fs-4 fw-1">{title}</h5>
                    <p className="card-text text-center">{description}</p>
                    <div className='flex justify-between mt-3'>
                  <Link to={githubUrl} className="btn btn-dark">
                    <Button btnName="Github Url"/>
                  </Link>
                    <Link to={liveUrl} className="btn btn-dark ">
                        <Button btnName="Live Demo"/>
                </Link> 
                    
                    </div>
                </div>
            </div>
        </>
    )
}















