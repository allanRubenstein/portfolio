import React from 'react';
import styled from 'styled-components';
import Page from '../../components/page/Page';
import { Paragraph } from '../../components/typography/Paragraph';

export interface ContactPageProps {
  // TODO: something here
  pageTitle?: string;
  mainPageHeaderText?: string;
}

const ContactPage = ({
  pageTitle = 'Allan Rubenstein - Contact',
  mainPageHeaderText = 'Contact',
}: ContactPageProps): JSX.Element => {
  return (
    <Page pageTitle={pageTitle} mainPageHeaderText={mainPageHeaderText}>
      <MainWrap>
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
        <StyledParagraph hasMaxCharacterLimit>
          Feel free to give me a shout&hellip;
        </StyledParagraph>
        <VideoWidthWrap>
          <VideoWrap>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/aXqkNF8fgs8?start=4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrap>
        </VideoWidthWrap>
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

// TODO: adjust this max width
const VideoWidthWrap = styled.div`
  max-width: 60ch;
  width: 100%;
  margin: auto;
`;
const VideoWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin-left: auto;
  margin-right: auto;
  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

export default ContactPage;
