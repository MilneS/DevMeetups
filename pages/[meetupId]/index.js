import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1547482802-54e4e97a1637?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      title="A First Meetup"
      adress="5 st street, 12345 City"
      description="This is a first meetup"
    />
  );
};

export default MeetupDetails;
