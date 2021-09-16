export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }


 export function getBubbleSortAnimations(array)
  {
    var animations=[];
    var m=array.length-2;
    var g;
    for(;m>=0;m--)
    {
      var e=0;
      var f=1;
      while(e<=m)
      {
        animations.push([e,f]);
        animations.push([e,f]);
        if(array[f]<array[e])
        {
          g=array[e];
          array[e]=array[f];
          array[f]=g;
        }
        //animations.push([]);
        animations.push([e,array[e],f,array[f]]);
        e++;
        f++;
      }

    }
    return animations;
  }


  export function getLinearSortAnimations(array)
  {
    var animations=[];
    var temp;
    for(var e=0;e<=array.length-2;e++)
    {
      for(var f=e+1;f<=array.length-1;f++)
      {
        animations.push([e,f]);
        animations.push([e,f]);
        if(array[f]<array[e])
        {
          temp=array[e];
          array[e]=array[f];
          array[f]=temp;
        }
        animations.push([e,array[e],f,array[f]]);
      }
    }
    return animations;
  }

  export function getSelectionSortAnimations(array)
  {
   
    var animations=[];
    var smallestIdx;
    var temp;
    for(let e=0;e<=array.length-2;e++)
    {
      smallestIdx=e;
      for(let f=e+1;f<=array.length-1;f++)
      {
        
        if(array[f]<array[smallestIdx])
        {
          smallestIdx=f;
        }
        
      }
      temp=array[smallestIdx];
      array[smallestIdx]=array[e];
      array[e]=temp;
      animations.push([e,smallestIdx]);
        animations.push([e,smallestIdx]);
      animations.push([e,array[e],smallestIdx,array[smallestIdx]]);
    }
    
    return animations;
  }

  