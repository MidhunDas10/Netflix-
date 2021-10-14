import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY, imageurl} from '../../constants/constants'
import YouTube from 'react-youtube'
function Rowpost(props) {
        const [urlid,setUrlid] = useState('')
        const [movies, setMovies] = useState([])
        useEffect(() => {
            axios.get(props.url).then((response)=>{
                
                setMovies(response.data.results)
            })
            
        })
        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
          const handleClick= (id)=>{
            console.log(id)
              axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce=>{
                  console.log(responce.data.results )
                  if(responce.data.results.length!==0){
                    setUrlid(responce.data.results[0])
                    
                  }else{
                      console.log("array empty")
                  }
                  
              })
          }
        return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                <img onClick={()=>handleClick(obj.id)} className={ props.isSmall ? 'smallPoster': 'poster'} src= {`${imageurl+obj.poster_path}`} />

                )}
              

            </div>
        { urlid && <YouTube videoId={urlid.key} opts={opts}/> } 
        </div>
    )
}


export default Rowpost
