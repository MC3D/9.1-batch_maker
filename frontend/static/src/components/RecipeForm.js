import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      recipe_type: '',
      is_public: false,
      prep_time: '',
      cook_time: '',
      cook_temp: '',
      temp_scale: '',
      recipe_amount: '',
      recipe_unit: '',
      personal_notes: '',
    }
    this.saveRecipe = this.saveRecipe.bind(this);
    this.toggleIsPublic = this.toggleIsPublic.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  toggleIsPublic() {
    this.setState({is_public: !this.state.is_public});
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  saveRecipe(e) {
    e.preventDefault();

    if(!this.state.recipe_type) {
      alert('please select a recipe type');
      return;
    }

    alert('you saved a recipe');
  }

  render() {
    return(
      <form onSubmit={this.saveRecipe}>
        <input type="text" name="name" placeholder="Recipe Name" value={this.state.name} onChange={this.handleInput} required/>
        <input type="text" name="recipeBy" placeholder="By" disabled/>
        <span>Make it Public</span><input type="checkbox" checked={this.state.is_public} onChange={this.toggleIsPublic}/>
        <span>Keep it Private</span><input type="checkbox" checked={!this.state.is_public} onChange={this.toggleIsPublic}/>
        <div className="form-row">
          <select className="col" id="recipe-type-select" name="recipe_type" value={this.state.recipe_type} onChange={this.handleInput}>
            <option value="">Recipe Type</option>
            <option value="BREAKFAST">Breakfast</option>
            <option value="LUNCH">Lunch</option>
            <option value="DINNER">Dinner</option>
            <option value="DESSERT">Dessert</option>
          </select>
          <input className="col" type="text" name="prep_time" placeholder="Prep Time" value={this.state.prep_time} onChange={this.handleInput} required/>
          <input className="col" type="text" name="cook_time" placeholder="Cook Time" value={this.state.cook_time} onChange={this.handleInput} required/>
          <input className="col" type="text" name="cook_temp" placeholder="Cook Temp" value={this.state.cook_temp} onChange={this.handleInput} required/>
          <select className="col" id="temp-scale-select" name="temp_scale" value={this.state.temp_scale} onChange={this.handleInput}>
            <option value="FARENHEIT">Farenheit</option>
            <option value="CELSIUS">Celsius</option>
          </select>
        </div>
        <div className="form-row">
          <span>This recipe will make</span>
          <input type="text" name="recipe_amount" placeholder="Amount" value={this.state.recipe_amount} onChange={this.handleInput} required/>
          <input type="text" name="recipe_unit" placeholder="cookies, loaves, etc." value={this.state.recipe_unit} onChange={this.handleInput} required/>
        </div>
        <div className="form-row">
          <label htmlFor="personalNotes">Personal Notes</label>
          <textarea className="col-12" name="personal_notes" id="personalNotes" cols="30" rows="10" value={this.state.personal_notes} onChange={this.handleInput} required></textarea>
        </div>
        <button className="btn btn-primary">Save this Recipe!</button>
      </form>
    )
  }
}

export default RecipeForm;
