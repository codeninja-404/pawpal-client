import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";

const PetCard = ({item}) => {
    return (
        <Card className="m-2">
        <CardHeader floated={false} className="h-72">
          <img src={item.image} className="w-full" alt="pet_img" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2 uppercase">
            {item.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            AGE : {item.age}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Location : {item.location}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center pt-2">
          <Tooltip content="VIEW PET DETAILS">
            <Button>Details</Button>
          </Tooltip>
          
        </CardFooter>
      </Card>
    );
};

export default PetCard;