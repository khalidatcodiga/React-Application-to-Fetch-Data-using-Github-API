import React ,{useState} from 'react'

export default function form() {

  const [username, setUsername] = useState("");
  
  const [data , setData] = useState({});
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
    };

 const onSubmiteHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
    .then((result) => {
        return result.json();
    }).then((values) => {
        console.log(values);
        setData(values);
    }
    )

           
    };

  return (
      <>
    <form if="myForm" onSubmit={onSubmiteHandler}>
    <div className=" container mb-3">
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Github username"  value={username} onChange={onChangeHandler}/>
    <br />
  <button className="btn btn-primary" >Submit</button>
</div>
</form>

<div className='container'>

<div className="card p-3">
    <div className="d-flex align-items-center">
        <div className="image"> 
        <img src={data.avatar_url}className="rounded" width="155"/> 
        </div>
        <div className="ml-3 w-100">
            <h3 className="mb-0 mt-0">{data.login}</h3><span>{data.bio}</span>
            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <br />
                <div className="d-flex flex-column"> <span className="articles">Repo</span> <span className="number1">{data.public_repos}</span> </div>
                <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">{data.followers}</span> </div>
                <div className="d-flex flex-column"> <span className="rating">following</span> <span className="number3">{data.following}</span> </div>
            </div>
        </div>
    </div>
</div>

</div>





</>
  )
}
