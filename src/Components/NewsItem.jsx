import image from '../assets/default.jpeg'

const NewsItem = ({title,description,src,url,publishedAt,source}) => {

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:'345px'}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{ left: "90%", zIndex: "1" }}>{source?source:"Unknown"}
        </span>
  <img src={src?src:image} style={{height:'200px',width:'325px'}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title"><b>{title.slice(0,15)}</b></h4>
    <p className="card-text" >
      {description?description.slice(0,60):"Stay updated with the latest headlines from around the world. Click to read more."}
    </p>
    <p className='text-secondary'>Posted on {publishedAt.slice(0,10)}</p>
    <a href={url} className="btn btn-success">
      Read News
    </a>
  </div>
</div>

  )
}

export default NewsItem
