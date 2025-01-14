import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
      <><div className='container'>
            <div className='column'>
                <img src='#ig' />
                <h3>Critiano Ronaldo</h3>
                <p className='title'>Manchester United</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
        <div className='card'>
           <img src='kante.jpg'/>
           <h3>Kante</h3>
           <p className='title'>Chelsea</p>
           <p><button>Detail</button></p> 
            </div>       
    </div>
    <div className='column'>
       <div className='card'>
        <img src='messi.jpg'></img>
        <h3>Messi</h3>
        <p className='title'>PSG</p>
        <p><button>Detail</button></p>
       </div>
    </div>
    <div className='column'>
       <div className='card'>
        <img src='neymar.jpg'></img>
        <h3>Neymar</h3>
        <p className='title'>PSG</p>
        <p><button>Detail</button></p>
       </div>
    </div>
    <div className='column'>
       <div className='card'>
        <img src='kane.jpg'></img>
        <h3>Kane</h3>
        <p className='title'>Tottemham</p>
        <p><button>Detail</button></p>
       </div>
    </div>
    <div className='column'>
       <div className='card'>
        <img src='haaland.jps'></img>
        <h3>Haaland</h3>
        <p className='title'>Manchester City</p>
        <p><button>Detail</button></p>
       </div>
    </div>
    </>
    )
  }
}
