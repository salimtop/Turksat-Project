import Navbar from "./Navbar";
import { useState} from "react";
import { Navigate, useLocation  } from "react-router-dom";

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
    const playerCount = props.playerPerTeam;
    const forms = []

    for(let i=1; i<=playerCount; i++){
        forms.push(<div className="form-group">
                        <label>#{i}</label>
                        <fieldset>
                            <input type="text" className="form-control" placeholder="Name"/>
                        </fieldset>
                        <fieldset>
                            <input type="text" className="form-control" placeholder="Surname"/>
                        </fieldset>
                        <fieldset>
                            <input type="email" className="form-control" placeholder="email" />
                        </fieldset>
                    </div>
        )
    }

    return (
      <form className="form-inline">
        {forms}
        <button type="submit" className="btn btn-primary" style={{marginTop:"30px"}}>Apply</button>
      </form>
    );
  }

function JoinTournament() {

    const location = useLocation();

    if (location.state == null) {
       return  <Navigate to="/"/>
    }
    const data = location.state.props;
    const playerCount = data.playerPerTeam;
    
    console.log(data)

    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="Join-container">
                    <h3>Join {data.title}</h3>
                    <img src={data.imgSrc} alt="Tournament Sport Illustration"/>
                    <h5>Team Players</h5>
                    <InlineForm playerPerTeam={playerCount} />
                </div>
            </div>
        </>
    )
}

export default JoinTournament;