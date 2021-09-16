import React,{Component} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import {getBubbleSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import {getLinearSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
import {getSelectionSortAnimations} from '../sortingAlgorithms/sortingAlgorithms';
const ANIMATION_SPEED_MS = 10;
const NUMBER_OF_ARRAY_BARS = 35;
const PRIMARY_COLOR = '#39CCCC';
const SECONDARY_COLOR = '#B10DC9';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


const SortingVisualizer=()=>{
    const classes = useStyles();
    const [buttonState,setButtonState]=React.useState(false);
    const [array,setArray]=React.useState([]);
    React.useEffect(()=>{
        document.body.style = 'background: #DDDDDD;';
       resetArray();
    },[]);

    
    const resetArray=()=>
    {
        const array=[];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
        {
           array.push(randomIntFromInterval(5,700));
        }
        setArray(array);
    }
    
    const mergeSort=()=>
    {
      const animations = getMergeSortAnimations(array);
      for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    }

    const bubbleSort=()=>
    {
        const animations=getBubbleSortAnimations(array);
        for(let i=0;i<animations.length;i++)
        {
            const arrayBars=document.getElementsByClassName('array-bar');
            const isColorChange=i%3!==2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
              } else {
                setTimeout(() => {
                  const [barFirstIdx, newFirstBarHeight,barSecondIdx, newSecondBarHeight] = animations[i];
                  const barFirstStyle = arrayBars[barFirstIdx].style;
                  barFirstStyle.height = `${newFirstBarHeight}px`;
                  const barSecondStyle = arrayBars[barSecondIdx].style;
                  barSecondStyle.height = `${newSecondBarHeight}px`;
                }, i * ANIMATION_SPEED_MS);
              }

        }
    }

    
    const linearSort=()=>
    {
        const animations=getLinearSortAnimations(array);
        const arrayBars=document.getElementsByClassName('array-bar');
        for(let i=0;i<animations.length;i++)
        {
            const [barFirstIndex,barSecondIndex]=animations[i];
            const colorChange=i%3!==2;
            if(colorChange)
            {
               const barFirstStyle=arrayBars[barFirstIndex].style;
               const barSecondStyle=arrayBars[barSecondIndex].style;
               const color=i%3===0?SECONDARY_COLOR:PRIMARY_COLOR;
               setTimeout(()=>{
                   barFirstStyle.backgroundColor=color;
                   barSecondStyle.backgroundColor=color;
               },i*ANIMATION_SPEED_MS);
            }
            else {
                
                setTimeout(()=>{
                    const [barFirstIdx, newFirstBarHeight,barSecondIdx, newSecondBarHeight] = animations[i];
                    const barFirstStyle=arrayBars[barFirstIdx].style;
                    const barSecondStyle=arrayBars[barSecondIdx].style;
                    barFirstStyle.height=`${newFirstBarHeight}px`;
                    barSecondStyle.height=`${newSecondBarHeight}px`;
                },i*ANIMATION_SPEED_MS);
            }
        }       
    }

    
    const selectionSort=()=>
    {
        const animations=getSelectionSortAnimations(array);
        for(let i=0;i<animations.length;i++)
        {
            const arrayBars=document.getElementsByClassName('array-bar');
            const isColorChange=i%3!==2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                console.log(barOneIdx);
                console.log(barTwoIdx);
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
              } else {
                setTimeout(() => {
                  const [barFirstIdx, newFirstBarHeight,barSecondIdx, newSecondBarHeight] = animations[i];
                  const barFirstStyle = arrayBars[barFirstIdx].style;
                  barFirstStyle.height = `${newFirstBarHeight}px`;
                  const barSecondStyle = arrayBars[barSecondIdx].style;
                  barSecondStyle.height = `${newSecondBarHeight}px`;
                }, i * ANIMATION_SPEED_MS);
              }

        }
    }
        return(
            <div>
            <div className={classes.root}>
        <AppBar position="static"  style={{ background: '#39CCCC' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SortingAlgoVisualizer
          </Typography>
             <Button disabled={buttonState} color="inherit" onClick={()=>{resetArray()}}>Generate New Array</Button>
             <Button disabled={buttonState} color="inherit" onClick={()=>{bubbleSort()}}>Bubble Sort</Button>
             <Button disabled={buttonState} color="inherit" onClick={()=>{linearSort()}}>Linear Sort</Button>
             <Button disabled={buttonState} color="inherit" onClick={()=>{selectionSort()}}>Selection Sort</Button>
             <Button disabled={buttonState} color="inherit" onClick={()=>{mergeSort()}}>Merge Sort</Button>
        </Toolbar>
      </AppBar>
    </div>
            
            <div className='array-container'>
            {
                array.map((value,idx)=>{
                    return(
                        <div className="array-bar" key={idx}
                        style={{
                            height:`${value}px`,
                            backgroundColor:PRIMARY_COLOR
                            }}>
                            
                        </div>
                    )
                })
            } 
            </div>
            </div>
        );
    }


// to generate random numbers in javascript
const randomIntFromInterval=(min,max)=>
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export default SortingVisualizer;