import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name='description' content='Browse a huge list of highly active meetups.'/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(`${process.env.REACT_APP_API_USER}`);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
