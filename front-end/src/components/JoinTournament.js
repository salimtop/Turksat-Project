import Navbar from "./Navbar";
import { useState } from "react";

function DynamicInlineForm() {
    const [forms, setForms] = useState([{ id: 1, isLast: true }]);
  
    const handleAddForm = () => {
      setForms(prevForms => {
        const lastForm = prevForms[prevForms.length - 1];
        lastForm.isLast = false;
        return [...prevForms, { id: lastForm.id + 1, isLast: true }];
      });
    };
  
    const handleFormFocus = formId => {
      if (formId === forms[forms.length - 1].id) {
        handleAddForm();
      }
    };

    return (
      <form className="form-inline">
        {forms.map(form => (
          <div className="form-group" key={form.id} style={form.isLast ? {opacity:0.5}:{}}>
            <fieldset>
                <input type="text" className="form-control" placeholder="name@example.com"/>
            </fieldset>
            <fieldset>
                <input type="text" className="form-control" placeholder="Optional"/>
            </fieldset>
            <fieldset>
                <input type="text" className="form-control" placeholder="Optional" onFocus={() => handleFormFocus(form.id)} />
            </fieldset>
            {
                !form.isLast && 
                <fieldset>
                    <button type="button" className="btn btn-danger">x</button>
                </fieldset> 
            }
          </div>
        ))}
      </form>
    );
  }

function InlineForm(props) {
    const playerCount = 5;
    const forms = []

    for(let i=0; i<playerCount; i++){
        forms.push(<div className="form-group">
                        <fieldset>
                            <input type="text" className="form-control" placeholder="name@example.com"/>
                        </fieldset>
                        <fieldset>
                            <input type="text" className="form-control" placeholder="Optional"/>
                        </fieldset>
                        <fieldset>
                            <input type="text" className="form-control" placeholder="Optional" />
                        </fieldset>
                    </div>)
    }
    return (
      <form className="form-inline">
        {forms}
      </form>
    );
  }

function JoinTournament() {

    return (
        <div>
            <Navbar/>
            <InlineForm playerCount="5" />
        </div>
    )
}

export default JoinTournament;