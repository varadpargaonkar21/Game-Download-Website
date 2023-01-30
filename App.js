import React , {useState} from 'react';
import './App.css';
import AnyRandomGame0 from './AnyRandomGame0/AnyRandomGame0';
import AnyRandomGame2 from './AnyRandomGame2/AnyRandomGame2';
import AnyRandomGame3 from './AnyRandomGame3/AnyRandomGame3';
import AnyRandomGame from './AnyRandomGame/AnyRandomGame';

function Reactt() {
           
//   ("#nav a").click(function(e){
//     e.preventDefault();
//     (".toggle").hide();
//     var toShow = (this).attr('href');
//     (toShow).show();
// });

  const [showAnyRandomGame, setShowAnyRandomGame] = useState(true);
  const [showAnyRandomGame0, setShowAnyRandomGame0] = useState(false);
  const [showAnyRandomGame2, setShowAnyRandomGame2] = useState(false);
  const [showAnyRandomGame3, setShowAnyRandomGame3] = useState(false);
   
  

  return (
      
    
      <div className='flex'>
         
         
         <div id="nav">
         <h1>Select Category here</h1>
         <div className='border'>     
    <div onClick={()=> setShowAnyRandomGame0(true) || setShowAnyRandomGame2(false) || setShowAnyRandomGame3(false) || setShowAnyRandomGame(false)}>Action Games</div>
    <div onClick={()=> setShowAnyRandomGame2(true) || setShowAnyRandomGame0(false) || setShowAnyRandomGame3(false) || setShowAnyRandomGame(false)}>Racing Games</div>
    <div onClick={()=> setShowAnyRandomGame3(true) || setShowAnyRandomGame0(false) || setShowAnyRandomGame2(false) || setShowAnyRandomGame(false)}>Superhero Games</div>
    </div>
</div>

{showAnyRandomGame && <div><AnyRandomGame/></div>}
{showAnyRandomGame0 && <div><AnyRandomGame0 props={setShowAnyRandomGame0}/></div>} 
{showAnyRandomGame2 && <div><AnyRandomGame2/></div>}
{showAnyRandomGame3 && <div><AnyRandomGame3/></div>}
 


     </div>
    
     );
}

export default Reactt; 
