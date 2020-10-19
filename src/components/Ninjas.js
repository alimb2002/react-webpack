import React , {Component} from 'react';

const Ninjas = ({ninjas , deleteNinja })=>{
        const ninjaList = ninjas.map( (ninja) => {
            return(
                <div className="card border-secondary mb-3" style={{  }} key={ninja.id}>
                    <div className="card-header">{ ninja.name }</div>
                    <div className="card-body">
                        <h4 className="card-title">{ ninja.age }</h4>
                        <p className="card-text">{ninja.belt}</p>
                    </div>
                    <p style={{ margin:'1em' }}> 
                    <button className="btn btn-primary" onClick={ ()=> {deleteNinja(ninja.id)} } >Delete Ninja</button>
                    </p>
                </div>
            )
        } )
        return(
            <div>
                { ninjaList }
            </div>
        )
}

export default Ninjas;