/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Heading from "../Global/Heading/Heading";
import PricingCard from "./PricingCard";

const Pricing = () => {
    return (
        <section className="pricing" css={styles}>
            <Container>
                <Heading title="OUR PRICING" info="If you are not familiar with GYM Dot, you may think that our prices are higher than regular gym memberships. What do you really get from a typical gym membership? You pay a flat fee to use the equipment – that’s it!" />
                <div className="wrapper">
                    <PricingCard cardTitle="BEGINNER" cardPricing="₹1200/m" />
                    <PricingCard cardTitle="EXPERT" cardPricing="₹4100/m" />
                    <PricingCard cardTitle="PRO" cardPricing="₹6000/m" />
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
        .wrapper {
            padding: 80px 0 0 0;
            display: flex;
            justify-content: space-between;
        }
    }
    @media (max-width: 730px) {
        .container {
            .wrapper {
                flex-direction: column;
                flex-wrap: wrap;
                .pricingCard {
                    margin: 10px auto;
                }
            }
        }
    }

    @media (min-width: 731px) and (max-width: 1320px) {
        .container {
            .wrapper {
                flex-wrap: wrap;
                .pricingCard {
                    max-width: 33%;
                    margin: 20px 0 0 0;
                }
            }
        }
    }
`

export default Pricing;