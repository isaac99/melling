import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Flex,
  Box,
  Subhead,
  Kicker,
  Text,
  ButtonList,
} from "./ui"

import * as styles from "./feature.css"

export default function Feature(props) {
  return (
    <Section padding={4} background="" className={styles.featureSection}>
      <Container>
        <Flex gap={4} variant="responsive" className={styles.innerBox}>
          <Box width="half" order={props.flip ? 1 : null}>
            {props.image && (
              <GatsbyImage
                id="test123"
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
                className={styles.featureImage}
              />
            )}
          </Box>
          <Box width="half">
            <Subhead>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.heading}
            </Subhead>
            <Text variant="lead">{props.text}</Text>
            <ButtonList links={props.links} reversed={true}/>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    kicker
    heading
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
