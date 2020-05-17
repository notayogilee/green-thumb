import React from 'react';

export default function DropDown(props) {



  return (

    <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>{props.dropDownName}</a>

    // <!--Dropdown Structure-- >
    <ul id='dropdown1' class='dropdown-content'>

    </ul>
  )
}