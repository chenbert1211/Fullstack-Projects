{"filter":false,"title":"UpdateStudent.js","tooltip":"/2206-fsa-rm-web-ft-jpfp/app/components/UpdateStudent.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":83,"column":62},"action":"insert","lines":["import React from \"react\";","import axios from 'axios';","import { connect } from 'react-redux';","import { Link } from 'react-router-dom';","import  { updateCampuse }  from '../redux/campuses';"," "," ","class UpdateForm extends React.Component{","   constructor(props){","     super(props)","    //  console.log(props)","     this.state = {","       id: this.props.campId,","       name: '',","       imageUrl: '',","       address: '',","       description: ''","     }","     ","     this.handleChange = this.handleChange.bind(this)","     this.handleSubmit = this.handleSubmit.bind(this)","   }","   ","   handleChange(event){","     this.setState({","       [event.target.name]: event.target.value","     })","   }","   ","   handleSubmit(event){","     event.preventDefault();","     this.props.updateCampuse({...this.state})","     this.props.deSelect()","   }","   ","   async componentDidMount(){","    //   console.log('hii')","       const { data } = await axios.get(`/api/campuses/${this.props.campId}`)","       this.setState({","           name: data.name,","           imageUrl: data.imageUrl,","           address: data.address,","           description: data.description","       })","   }","  render(){","    const { name, imageUrl, address, description} = this.state","    // console.log(this.state)","    // console.log(this.props)","    return( ","    <form onSubmit={this.handleSubmit}>","  <label>","    Name:","    <input name=\"name\" onChange={this.handleChange} value={name} />","  </label>","  <br></br>","  <label>","    Image URL:","    <input name=\"imageUrl\" onChange={this.handleChange} value={imageUrl} />","  </label><br></br>","  <label>","    Address:","    <input name=\"address\" onChange={this.handleChange} value={address}/>","  </label><br></br>","  <label>","    Description:","    <input name=\"description\" onChange={this.handleChange} value={description}/>","  </label><br></br>","  <input type=\"submit\"/>","</form>","  ","      )  ","}}","","// const mapStateToProps = (state) =>{","//     console.log(state)","// }","","const mapDispatchToProps = (dispatch) => (","    {","  updateCampuse: (campus) => dispatch(updateCampuse(campus))","})","","export default connect(null,  mapDispatchToProps)(UpdateForm);"],"id":1}],[{"start":{"row":16,"column":1},"end":{"row":16,"column":22},"action":"remove","lines":["      description: ''"],"id":2}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":1},"end":{"row":16,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":44,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1657921449722,"hash":"bd1a903405aa68d64706f83f2aac35691012b67c"}