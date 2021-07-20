import MeetupList from "../components/meetups/MeetupList";
import Layout from '../components/layout/Layout';

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A fist meetup",
    image:
      "https://images.unsplash.com/photo-1547482802-54e4e97a1637?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    adress: "5 st street, 12345 City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://images.unsplash.com/photo-1547482802-54e4e97a1637?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmNlbG9uYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    adress: "10 st street, 12645 City",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return(
  <Layout><MeetupList meetups={DUMMY_MEETUP}/> </Layout>
  )
}

export default HomePage;
