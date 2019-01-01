import React, { PureComponent } from 'react';

import {
  FlyIn,
  Flex,
  Icon,
  Image,
  Text,
  Title,
} from 'lib/components';

export class AboutMe extends PureComponent {
  renderLink = (link, icon, direction) => (
    <FlyIn type={direction}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon className={icon} fontSize="title" />
      </a>
    </FlyIn>
  )

  render() {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="images/profile.jpg"
          width={250}
          height={250}
          borderRadius="50%"
          alt="Gentry Riggen"
        />
        <Title
          textAlign="center"
          p="lg"
        >
          Hi, I'm Gentry.
        </Title>

        <Text textAlign="center">
          I'm a full-stack software engineer developing websites and mobile apps with React, React Native, Node and Firebase.
          In the past I have done lots of PHP, Angular, and MySQL.
          Check out my work or hit me up on any of the platforms below <span role="img" aria-label="muscle fire">🔥💪</span>.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-around"
          pt="lg"
          width={1}
        >
          {this.renderLink(
            'https://twitter.com/gentryriggen',
            'fab fa-twitter',
            FlyIn.FLY_IN_LEFT,
          )}
          {this.renderLink(
            'https://github.com/gentryriggen',
            'fab fa-github',
            FlyIn.FLY_IN_BOTTOM_LEFT,
          )}
          {this.renderLink(
            'https://www.linkedin.com/in/GentryRiggen',
            'fab fa-linkedin-in',
            FlyIn.FLY_IN_BOTTOM_RIGHT,
          )}
          {this.renderLink(
            'https://stackoverflow.com/users/1767285/gentryriggen',
            'fab fa-stack-overflow',
            FlyIn.FLY_IN_RIGHT,
          )}
        </Flex>
      </Flex>
    );
  }
}

export default AboutMe;
