import React, { Component } from 'react'
import './style.css'
export default class Glass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: './img/v1.png',
      price: 30,
      model: 'GUCCI G8850U',
    }
  }
  renderClass = (clas) => {
    let imgSource = '';
    let priceSouce = '';
    let modelSource = '';
    switch (clas) {
      case 'v1':
        imgSource = "./img/v1.png";
        priceSouce = 30;
        modelSource = 'GUCCI G8850U'
          ; break;
      case 'v2':
        imgSource = "./img/v2.png";
        priceSouce = 40;
        modelSource = 'CHANNEL G8850U'
          ; break;
      case 'v3':
        imgSource = "./img/v3.png";
        priceSouce = 50;
        modelSource = 'DIOR D6005U'
          ; break;
      case 'v4':
        imgSource = "./img/v4.png";
        priceSouce = 60;
        modelSource = 'PRADA P9700'
          ; break;
      case 'v5':
        imgSource = "./img/v5.png";
        priceSouce = 70;
        modelSource = 'FENDI F8750'
          ; break;
      case 'v6':
        imgSource = "./img/v6.png";
        priceSouce = 80;
        modelSource = 'GAP G8850U'
          ; break;
      case 'v7':
        imgSource = "./img/v7.png";
        priceSouce = 90;
        modelSource = 'SEIKO G8850U'
          ; break;
      case 'v8':
        imgSource = "./img/v8.png";
        priceSouce = 95;
        modelSource = 'CHANNEL G8850T'
          ; break;
      case 'v9':
        imgSource = "./img/v9.png";
        priceSouce = 100;
        modelSource = 'GUCCI G8759H'
          ; break;
      default:
        break;
    }
    this.setState({
      img: imgSource,
      price: priceSouce,
      model: modelSource,
    })

  }
  render() {
    return (
      <div className='container py-5 bg-dark'>
        <h1>Class Demo</h1><br />
        <div className='row'>
          <div className='col-4'>
            <div className="card text-left">
              <img className="card-img-top" src="./img/model.jpg" width={300} alt='img' />
              <img className='classTest' src={this.state.img} width={200} alt='img' />
              <div className="card-body">
                <span className="card-title rounded bg-danger px-3 py-2 text-white font-weight-bold h4">{this.state.price} $</span>
                <p className="card-text mt-3">{this.state.model}</p>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='classOne pb-5'>
              <button className='btn border' onClick={() => this.renderClass('v1')}>
                <img src="./img/v1.png" width={100} alt='img' />
              </button>
              <button className='btn border mx-1' onClick={() => this.renderClass('v2')}>
                <img src="./img/v2.png" width={100} alt='img' />
              </button>
              <button className='btn border' onClick={() => this.renderClass('v3')}>
                <img src="./img/v3.png" width={100} alt='img' />
              </button>
              <button className='btn border ml-1' onClick={() => this.renderClass('v4')}>
                <img src="./img/v4.png" width={100} alt='img' />
              </button>
            </div>
            <div className='classTwo mt-5'>
              <button className='btn border' onClick={() => this.renderClass('v5')}>
                <img src="./img/v5.png" width={100} alt='img' />
              </button>
              <button className='btn border mx-1' onClick={() => this.renderClass('v6')}>
                <img src="./img/v6.png" width={100} alt='img' />
              </button>
              <button className='btn border' onClick={() => this.renderClass('v7')}>
                <img src="./img/v7.png" width={100} alt='img' />
              </button>
              <button className='btn border ml-1' onClick={() => this.renderClass('v8')}>
                <img src="./img/v8.png" width={100} alt='img' />
              </button>
            </div>
            <div className='classTwo mt-5'>
              <button className='btn border' onClick={() => this.renderClass('v9')}>
                <img src="./img/v9.png" width={100} alt='img' />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
