/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Heading from "../Global/Heading/Heading";
import FeaturesCard from "../Features/FeaturesCard";
import Features1 from "../../images/features1.svg";
import Features2 from "../../images/features2.svg";
import Features3 from "../../images/features3.svg";
import Features4 from "../../images/features4.svg";

const Features = () => {
    return (
        <section className="features" css={styles}>
            <Container>
                <Heading title="OUR FEATURES" info="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration." />
                <div className="featureWrapper">
                    <FeaturesCard featureImg={Features1} featureHeading="Weightlifting" featureInfo="Learn proper technique. If you're new to weight training, work with a trainer or other fitness specialist to learn correct form and technique. " />
                    <FeaturesCard featureImg={Features2} featureHeading="Specific Muscles" featureInfo="The 100 Best Exercises to Train Each Muscle Group. 1 Chest Exercises. All compound chest exercises will also work the shoulders and triceps. 2 Back Exercises. 3 Legs Exercises. 4 Shoulders Exercises. 5 Bicep Exercises. More items." />
                    <FeaturesCard featureImg={Features3} featureHeading="Flex Your Muscles" featureInfo="Flexing your muscles is more than just a way to show off the results of your strength training workouts. It can also be a way to build strength." />
                    <FeaturesCard featureImg={Features4} featureHeading="Cardio Exercises" featureInfo="Burn calories with the best cardio workouts on the treadmill, elliptical, or bike—or using no equipment at all." />
                </div>
            </Container>
        </section>
    )
}

const styles = css`
    width: 100%;
    background: #000;
    .container {
        padding: 150px 0;
        max-width: 1200px;
        .featureWrapper {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            padding: 80px 0 0 0;
        }
    }

    @media(max-width: 594px) {
        .container {
            .featureWrapper {
                display: flex;
                justify-content: center;
                margin: 0 auto;
                .featureCard {
                    margin: 40px 0 0 0;
                }
            }
        }
    }
`;

export default Features;