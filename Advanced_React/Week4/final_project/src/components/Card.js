import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <>
    <Box maxW='sm' borderWisth='1px' borderradius='1g' overflow='hidden'>
      <img src={imageSrc}/>
      <h1>{title}</h1>
      <p>{description}</p>
    </Box>
    </>
  )
};

export default Card;