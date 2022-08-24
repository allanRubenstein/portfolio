import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../typography/Paragraph';
import Page from '../Page';

export interface ContactPageProps {
  // TODO: something here
  pageTitle: string;
  mainPageHeaderText: string;
  // children?: React.ReactNode;
}

const ContactPage = ({
  pageTitle,
  mainPageHeaderText,
}: ContactPageProps): JSX.Element => {
  return (
    <Page
      pageTitle={pageTitle || 'Allan Rubenstein - Contact'}
      mainPageHeaderText={mainPageHeaderText || 'Contact'}
    >
      <MainWrap>
        {/* <StyledParagraph hasMaxCharacterLimit>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </StyledParagraph> */}
        <ul>
          <StyledParagraph forwardedAs="li">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/allanRubenstein"
            >
              GitHub
            </a>
          </StyledParagraph>
          <StyledParagraph forwardedAs="li">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/allanrubenstein/"
            >
              LinkedIn
            </a>
          </StyledParagraph>
          <StyledParagraph forwardedAs="li">
            Email: rubensteinallan@yahoo.com
          </StyledParagraph>
        </ul>
      </MainWrap>
    </Page>
  );
};

const MainWrap = styled.div`
  display: block;
  text-align: left;
`;

const StyledParagraph = styled(Paragraph)`
  margin-left: auto;
  margin-right: auto;
`;

export default ContactPage;
