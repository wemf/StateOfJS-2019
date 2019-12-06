import PageTemplate from 'core/pages/PageTemplate'
import { graphql } from 'gatsby'

export default PageTemplate

export const query = graphql`
    query featuresOtherFeatures($locale: String) {
        introduction: markdownRemark(
            frontmatter: {
                type: { eq: "introduction" }
                page: { eq: "features-other-features" }
                locale: { eq: $locale }
            }
        ) {
            html
        }
    }
`