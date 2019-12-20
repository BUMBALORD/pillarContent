import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import hero from './backLrg.jpg';
import work from './work.jpg';
import feet from './feet.jpg';
import teach from './teach.jpg';
import build from './build.jpg';
import change from './change.jpg';
import tools from './tools.jpg';
import auth1 from './auth1.jpg';
import auth2 from './auth2.jpg';
import webhooks from './webhooks.jpg';
import polling from './polling.jpg';
import logging from './logging.jpg';
import events from './events.jpg';
import kloudless from './kloudless.jpg';
import bridge from './bridge.jpg';
import light from './light.jpg';
import mountain from './mountain.jpg';
import concert from './concert.jpg';
import logs from './logs.jpg';
import future from './future.jpg';
import road from './road.jpg';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: 5
  },
  logo: {
    maxWidth: 160,
  },
  hero: {
    minHeight: 300,
    minWidth: '100%',
    display: 'inline-flex',
    margin: 'auto'
  },
  heroText: {
    margin: 'auto',
    fontSize: 50
  },
  regText: {
    fontSize: 22,
    marginTop: 25
  },
  highlightText: {
    fontSize: 26,
    marginTop: 25,
    fontStyle: "italic"
  },
  spacing: {
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center"
  },
  bottomSpacing: {
    marginTop: 40,
    textAlign: "center"
  },
  section: {
    marginBottom: 40
  },
  subHeader: {
    marginTop: 40,
    fontStyle: "italic",
    color: "#E48E40"
  },
  subHeaderAlt: {
    marginTop: 40,
    fontStyle: "italic",
    color: "#E7486D"
  },
  header: {
    fontStyle: "italic",
    color: "#514BF2",
    marginTop: 40
  },
  headerAlt: {
    fontStyle: "italic",
    color: "#2B8B9D",
    marginTop: 40
  },
  textColor: {
    color: "#514BF2"
  }
}));



function App() {
  
  const classes = useStyles();

  return (
    <div>
    <AppBar 
      position="static" 
    >
      <Toolbar>
      <Grid
        justify="space-between"
        container 
      >
      <Grid item>
        <Link href="https://www.kloudless.com?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">
          <img src="https://mlpwp7ewkcnn.i.optimole.com/w:auto/h:auto/q:90/https://kloudless.com/wp-content/uploads/2019/01/kloudless@2x.png" alt="logo" className={classes.logo} />
        </Link>
      </Grid>
      <Grid item>
        <div>
          <Typography variant="h6" className={classes.title} style={{ flex: 1 }}>
            Kloudless Guide To API Integrations
          </Typography> 
        </div>
      </Grid>  
      </Grid>
      </Toolbar>
    </AppBar>
    <Container className={classes.hero}>
      <Typography variant="h1" align="center" className={classes.heroText} fontWeight={700}>
            The Official Kloudless Guide To API Integrations
      </Typography> 
    </Container>
    <CardMedia
      component="img"
      alt="cover"
      height="450"
      src={hero}
      title="cover"
      className={classes.spacing}
    />
    <Container maxWidth="md" className={classes.spacing}>
      <Typography variant="h4" align="center" className={classes.textColor}>
        API Integrations Are No Longer a “Nice to Have.”	
      </Typography>
      <Typography align="center" className={classes.regText}>
      In the current software world of integrated systems, it is your duty as a product manager to give your users every available option necessary when it comes to API integrations. Your developers are talented, accomplished, and motivated. Don’t subject them to a painful existence of constant integration maintenance and headaches. Take away the pain of API integration by deciding on a concrete and planned-out strategy for your application’s integrations. Let your devs focus on what’s really important: your own unique functionality.
      </Typography>
    </Container>
    <Container maxWidth="md" className={classes.spacing}>
      <Divider variant="middle" className={classes.spacing} />
      <Typography variant="h2" align="center" className={classes.section}>
        Section 1: Getting Started
      </Typography>
      <Typography variant="h4" align="center" className={classes.header}>
        So, Your Team Is Hard at Work on the World’s Next Big Application, Right?
      </Typography>
      <CardMedia
        component="img"
        alt="product launch"
        height="250"
        src={work}
        title="product launch"
        className={classes.spacing}
      />
      <Typography align="center" variant="h5" className={classes.subHeader}>
        Maybe it’s something that will change the way people communicate; maybe it’s to revolutionize the workflow of a leading industry; maybe it’s an application to pioneer a new way of exchanging old family recipes. It doesn’t matter. You’re primed for success as long as your team can put together your vision and deliver it on time.
      </Typography>
      <Typography align="center" className={classes.regText}>
        As ideas are laid out, Kanban boards begin to fill up with Post-It notes, issue tracking software slowly amasses tickets, and now you’re left strategizing ways to make development easier and more swift. (Although really any programming language will do.) Your product roadmap begins its journey from initial user stories&nbsp; 
        <Link href="https://kloudless.com/blog/2019/07/22/preparing-for-launch-5-things-product-managers-should-do-before-a-product-launch?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">all the way to product launch</ Link>,&nbsp;and your target persona begins to take shape. The beauty of this stage in an application’s lifecycle is creating a product story, whether you contribute to that as a product manager or as a developer.
      </ Typography>
      <Typography align="center" className={classes.regText}>
        One thing you know for sure at this point; your application needs API integrations. Not just one, though. You need as many as possible.
      </ Typography>
      <Typography align="center" className={classes.regText}>
        That’s the beauty of your vision for your application. You want your users to sign up for your app and jump right in. Ideally, they’ll feel right at home using your application. You don’t want to pigeon-hole your users into using a service they’re not already comfortable with. Never underestimate a user’s reluctance to being forced into yet another set of logins and passwords (Including all the follow-up emails. No one likes those.).
      </ Typography>
      <Typography align="center" className={classes.regText}>
        One thing is now very clear -- a single integration of an API service provider in your app won’t do. Not only do you need to provide your users with the ability to use any of their preferred services in your application, but you also need these services to all work with each other.
      </ Typography>
      <Typography align="center" className={classes.highlightText}>
        Easier said than done.
      </ Typography>
      <Typography align="center" className={classes.regText}>
        Dealing with API integrations for your application can be a headache. Simply learning the ins-and-outs of a single API service can take you weeks to months of work before your developers are finished building out an integration, much less having them incorporate multiple services. Your development team might be in for over a year of work after reading through the documentation, prototyping, testing, and bug fixes are finished. At times, your go-to-market strategy might appear to be in peril, all as a result of API integrations.
      </ Typography>
      <Typography align="center" className={classes.regText}>
        In the fast-paced world of app development, speed to market is as important as anything. By the time you’re through building out your functionality, other applications competing for your market space may have launched already, leaving you with the burdensome task of differentiating your product from competitors by introducing even newer functionality or pivoting your business plan; both of which take up more of your company’s valuable time and money. You can’t use A/B testing to decide on your target users’ preference in API integrations, so providing a wealth of functionality when it comes to cloud services is pivotal to your app’s success.
      </ Typography>
      <Typography align="center" className={classes.regText}>
        All of these points should solidify the importance of a well-thought-out and organized strategy for adding API integrations into your application. Viable and long-term success can be achieved with some careful preparation and planning when beginning the product roadmap of your app. For the rest of this guide, we will help you achieve the integration success that your application deserves.
      </Typography>
    </Container>
    <Divider variant="middle" />
    <CardMedia
      component="img"
      alt="integration strategy"
      height="450"
      src={light}
      title="integration strategy"
      className={classes.spacing}
    />
    <Container maxWidth="md" className={classes.spacing}>
      <Typography variant="h2" align="center" className={classes.section}>
        Section 2: Planning Your Integration Strategy
      </Typography>
      <Typography variant="h4" align="center" className={classes.header}>
        These 3 steps will ensure you start your integration strategy on the right foot.
      </Typography>
      <CardMedia
        component="img"
        alt="building software"
        height="250"
        src={feet}
        title="building software"
        className={classes.spacing}
      />
      <Typography align="center" variant="h5" className={classes.subHeader}>
        Maybe it’s something that will change the way people communicate; maybe it’s to revolutionize the workflow of a leading industry; maybe it’s an application to pioneer a new way of exchanging old family recipes. It doesn’t matter. You’re primed for success as long as your team can put together your vision and deliver it on time.
      </Typography>
      <Divider variant="middle" className={classes.spacing} />
      <Typography variant="h4" align="center" className={classes.headerAlt}>
        Step 1: Who Are You Building For?
      </Typography>
      <Typography align="center" variant="h5" className={classes.subHeaderAlt}>
        Integrations are not your application’s core functionality. They are simply a way to bolster or aid in that functionality and should be treated as such. In order to offer your eventual users the best experience possible, plan for your integration strategy early and thoroughly. User stories and market research will help you immensely in that initial planning stage.
      </Typography>
      <CardMedia
        component="img"
        alt="building integrations"
        height="250"
        src={build}
        title="building integrations"
        className={classes.spacing}
      />
      <Typography align="center" className={classes.regText}>
        As a product manager, you are responsible for the choices in implementing integration with different services in your application. This means not only are you tasked with researching the best available options, but planning out how they will eventually work in your application’s user flow. This entails a deep dive into both your UI implementation and UX implementation.
      </Typography>
      <Typography align="center" className={classes.regText}>
        User stories are a necessary next step.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Often, user stories are thought of as a developer’s tool for planning out a feature’s requirements, but in reality, they can be applied to any procedure or steps an eventual user will take when using your application. In this case, we want to plan out how a user will go about accessing the integrations provided, and how they will use your application’s unique functionality in conjunction with those integrations. We also want to figure out your user persona and come up with exactly how that persona will want to use your app. 
      </Typography>
      <Typography align="center" className={classes.regText}>
        Let’s say your application is tailored to allow students and teachers to exchange files and documents in the classroom. Your user personas are just that: teachers and students. To proceed with your integration strategy, we’ll want to craft some concrete use cases for both of those personas before getting into which specific integrations we will eventually use. Let’s give it a shot:
      </Typography>
      <CardMedia
        component="img"
        alt="user story"
        src={teach}
        title="user story"
        className={classes.spacing}
      />
      <Typography align="center" className={classes.regText}>
        By laying out these specific use cases, you will already know the necessary integrations and subsequent functionality required of them when it comes time to start building your application based on your product roadmap. Small, but important, steps like these can make sure that everyone is on the same page when it comes time to finally build the connections necessary to fulfill the desired functionality in these use cases.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Market research is key as well. Hopefully, you’ve set aside time to do your research before even beginning to think about building out integrations. Based on your role, as a&nbsp;
        <Link href="https://kloudless.com/blog/2019/07/15/it-takes-all-types-what-type-of-product-manager-are-you?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">technical product manager, growth product manager, data project manager, or business project manager,</Link>&nbsp;market research absolutely has to be a strength of your core competencies.
      </Typography>
      <Typography align="center" className={classes.regText}>
        As you put together your product roadmap, base your decisions on market research as much as possible. This may seem obvious, but as many product managers will tell you, they often feel forced into features from stakeholders or incorporating technologies based on their current popularity in the industry.
      </Typography>
      <Typography align="center" className={classes.regText}>
        In other words, if it doesn’t call for Blockchain, don’t use Blockchain (or whatever else is ‘hot’ right now in the industry).
      </Typography>
      <Typography align="center" className={classes.regText}>
        Market validation should be one of your first priorities when beginning work on your product roadmap. Building a product that no one actually needs is essentially signing your own application’s death certificate before the work has even started. Take your time in the initial stages of planning to gather as much data as possible and make sure your decisions are weighted with this data in mind. Innovation will always be rewarded when determining the next big thing in software applications, but never lose sight of the value being presented along with that innovation. 
      </Typography>
      <Typography align="center" className={classes.regText}>
        To back this up as a major issue facing product managers,&nbsp;
         <Link href="https://www.mindtheproduct.com/2016/10/the-biggest-challenge-for-product-managers?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">
           Mind The Product’s 2016 survey 
        </Link>
        &nbsp;of product managers asked the question “What’s your #1 single biggest product management challenge right now?” The answers they received illustrated that 62% of PMs reported the greatest challenge they faced was prioritizing the roadmap without market research. 
      </Typography>
      <Divider className={classes.spacing} variant="middle" />
      <Typography variant="h4" align="center" className={classes.headerAlt}>
        Step 2: Understand Your User
      </Typography>
      <Typography align="center" variant="h5" className={classes.subHeaderAlt}>
        Users are simply people. When given the chance, they will go with what they know and feel comfortable with.
      </Typography>
      <CardMedia
        component="img"
        alt="build vs buy"
        height="250"
        src={change}
        title="build vs buy"
        className={classes.spacing}
      />
      <Typography align="center" className={classes.regText}>
        We’ve all had moments in our lives where instead of the new and mysterious, we side with something we feel ‘at home’ with. We love our security blankets. We rewatch the entirely of TV shows we love, despite new programming being more abundant than ever. We wear our favorite sweatshirt even though it has holes in it. Obviously, at points, we branch out and consume new media and buy new clothes, but those decisions take a concerted effort and aren’t nearly as quick or easy for us to decide on as just rewatching The Office or buying the same pair of New Balances we know we like.
      </Typography>
      <Typography align="center" className={classes.regText}>
        The same can be said for your potential users and their integration service of choice. A user with all of their files and documents in DropBox will likely forgo your application entirely if presented with an alternative&nbsp;<Link href="https://kloudless.com/products/cloud-storage-api/?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">cloud storage</Link>&nbsp;integration as the only available option. If a user keeps their&nbsp;<Link href="https://kloudless.com/products/calendar-api/" target="_blank">cloud calendar</Link>&nbsp;schedule in&nbsp;<Link href="https://kloudless.com/blog/2019/03/01/finding-a-time-to-meet-via-the-google-calendar-api?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">Google Calendar</Link>, then the process of migrating their calendar over to Office 365 is an incredibly daunting task that most users will be tentative at best about to undertake. When it comes to&nbsp;<Link href="https://kloudless.com/products/crm-api?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">CRM integrations</Link>, you don’t have the option of not supporting a service that your users are ingrained in. It is simply unacceptable to ask for your users to switch CRM providers in order to use your product. 
      </Typography>
      <Typography align="center" className={classes.regText}>
        All of these different scenarios of building integrations lead to one possible conclusion: The more integrations, the better. Why leave users by the wayside by simply choosing to support a single implementation of a service integration? 
      </Typography>
      <Typography align="center" className={classes.regText}>
        In a hypothetical situation where your application needs cloud storage integrations, providing only your personal choice of particular API integration is doing your application a disservice. Even though many of your potential users may be ingrained in DropBox, many of them will not be. A user that has all of their files, documents and potential workflow set up in Box, or Google Drive, or Egnyte is likely to forego your application entirely in search of another that provides the service integration they are comfortable with and deeply invested in. Never underestimate a user’s aversion to migrating their files and folders from one service provider to another. That process is essentially the internet’s version of moving houses. It’s exhausting.
      </Typography>
      <Typography align="center" className={classes.regText}>
        When given the chance, you should try to integrate with every popular integration service that you are capable of. Building software in need of file sync or folder sync is a daunting task for API developers, and generally leads teams in need of services that can accommodate these functionalities to the age-old question of&nbsp;<Link href="https://kloudless.com/blog/2019/08/14/build-vs-buy-whats-right-for-you?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">Build Vs Buy</Link>.&nbsp;
      </Typography>
      <Typography align="center" className={classes.regText}>
        The more services you offer, the more likely that any potential user that sees value in your product will immediately see a service integration they are ALREADY comfortable with. By integrating with as many services as possible, you can all but guarantee that some of your new users will more than likely take the time to at least give your application the fair shake it deserves.
      </Typography>
      <Typography align="center" className={classes.regText}>
        The problem with offering only one integration or even just a small few is that some people will leave before you’ve had the chance to win them over. Your application might work amazingly with only Dropbox integration, but some of your potential end-users will be too stubborn to give it a try. 
      </Typography>
      <Typography align="center" className={classes.regText}>
        No one likes to sign up for a new service when it’s not on their own terms. You are not an evangelist for these storage platforms, so by choosing only one of them, you are forcing yourself into the role of advocating an entirely different platform than your own. You should worry about selling your own product, not one that integrates with yours.
      </Typography>
      <Divider className={classes.spacing} variant="middle" />
      <Typography variant="h4" align="center" className={classes.headerAlt}>
        Step 3: Expect Maintenance and Lots of it
      </Typography>
      <Typography align="center" variant="h5" className={classes.subHeaderAlt}>
        The sad reality is that building out your integration connections is only the first step in a long and arduous process which will inevitably end in constant maintenance and upkeep of those integrations.
      </Typography>
      <CardMedia
        component="img"
        alt="data security"
        height="250"
        src={tools}
        title="data security"
        className={classes.spacing}
      />
      <Typography align="center" className={classes.regText}>
        Whenever you integrate with a third-party API, long term maintenance will play a factor. APIs will never act as a strictly static resource and should be treated as evolving organisms that will grow and change over the course of their life. Expect them to be updated regularly and make sure that you plan for the work and commitment it will take to keep integrations functioning properly. Whether that means a security fix, or additional activity monitoring functionality, keeping up with these updates will be a big ask of your developers.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Some of the changes you can expect from the lifecycle of a modern third-party integration are:
      </Typography>
      <Divider className={classes.spacing} variant="middle" />
      <Typography align="center" variant="h6" className={classes.subHeaderAlt}>
        New features and functionality
      </Typography>
      <Typography align="center" className={classes.regText}>
        As service integrations grow, new features and functionality will inevitably be introduced. This can change the structure of endpoints or API calls entirely. It is possible that new parameters will be instituted, and return outputs may change their structure of metadata resulting in required maintenance on your side to deal with the new structure. For instance, Dropbox, SharePoint, or Microsoft OneDrive may change the way they display their folder trees, which means until you update to accommodate their newest version, your users’ workflow will be in peril. API authentication,&nbsp;<Link href="https://kloudless.com/blog/2019/01/17/accessing-box-enterprise-content-via-jwt-and-per-user-access-tokens?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">JWT Token Exchange</Link>, or OAuth flow changes are also among those that occur frequently, so be on the lookout for those.
      </Typography>
      <Typography align="center" variant="h6" className={classes.subHeaderAlt}>
        Performance updates 
      </Typography>
      <Typography align="center" className={classes.regText}>
        A very beneficial change to an API may occur in the form of a performance update. While your application will thankfully reap the benefits of these changes as you continue to consume the API, it may result in small changes needing to be introduced into your code. Sometimes these changes are to take better advantage of the API itself, like in the instance of an endpoint allowing more data to be queried in a single call. This is usually accomplished with a small change in the structure of the call or header itself, but in order to take full advantage of the updated performance functionality, changes will probably have to be incorporated into your code.
      </Typography>
      <Typography align="center" variant="h6" className={classes.subHeaderAlt}>
        Security Updates
      </Typography>
      <Typography align="center" className={classes.regText}>
        Security vulnerabilities should always be at the front of every service provider’s mind. If found, these can result in changes to an endpoint or data return to combat any exploits that may have been discovered. As a consumer, you should always welcome these changes, as they are put in place to help keep your data safe. They do, however, usually result in functionality-breaking changes being introduced. If a security-exploit is discovered, you should expect to have to perform immediate maintenance on your connections to keep them both sound and functioning. Enterprise security compounds these needs, as they are especially malware or phishing attempts. Cloud CRM services are generally the most updated APIs, so expect a lot of&nbsp;<Link href="https://kloudless.com/blog/2019/08/09/protecting-user-content-the-role-of-unified-apis-in-enterprise-security?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">data security</Link>&nbsp;changes if your application connects to these services.
      </Typography>
      <Divider className={classes.spacing} variant="middle" />
      <Typography align="center" className={classes.regText}>
        While not all of these changes listed above will break your integration functionality every time they are introduced, you should always play it safe and expect them to. If a provider lets you know of a planned API change coming in the near future, plan to dedicate time and resources to making sure your connections stay sound once the changes are released. Scrambling to fix broken integrations because you didn’t pay close enough attention to an API’s versioning notes or planned announcements will cause you to implement sloppy or rushed fixes down the line, which will almost certainly upset your user base. Having a dedicated team for integration maintenance is also a very logical possibility, as they can spend much of their energy researching upcoming API changes and preparing to implement fixes quickly and efficiently.
      </Typography>
    </Container>
    <CardMedia
      component="img"
      alt="mountain"
      height="450"
      src={mountain}
      title="mountain"
      className={classes.spacing}
    />x
    <Container maxWidth="md" className={classes.spacing}>
    <Divider className={classes.spacing} variant="middle" />
    <Typography variant="h2" align="center" className={classes.section}>
        Section 3: Authentication
      </Typography>
      <Typography variant="h4" align="center" className={classes.header}>
      All about Authentication
      </Typography>
      <CardMedia
        component="img"
        alt="api authentication"
        height="250"
        src={auth1}
        title="api authentication"
        className={classes.spacing}
      />
      <Typography align="center" variant="h5" className={classes.subHeader}>
        Once you’ve created a viable product roadmap and the time to start building comes, make sure you have a well-thought-out strategy for dealing with API authentication across the board. 
      </Typography>
      <Typography align="center" className={classes.regText}>
        Securely connecting your users to their API services inside of your application means taking the time to properly think through your strategy for authentication. The process should usually entail prompting a user with a UI element to connect with their desired service, and then bringing them to an authentication screen where they can enter their login credentials to grant access to said service. The first step in this process should be outlining an initial walkthrough of what the process will look like with members of your UX team. Often overlooked, the UX is paramount when it comes to authentication. Your application should do everything it can to make authentication painless and simple, giving users a process that feels like their desired 3rd-party service integration is a part of your application and not a different service entirely. This can be done by keeping a few things in mind as you go about planning your auth process.
      </Typography>
      <CardMedia
        component="img"
        alt="api auth"
        height="300"
        src={auth2}
        title="api auth"
        className={classes.spacing}
      />
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Design First 
      </Typography>
      <Typography align="center" className={classes.regText}>
        Make sure that you work closely with your UX/Design team to make the authentication process feel like it’s an extension of your application itself. When plotting out the flow of authentication, customize your auth screens to have the same look and feel as the rest of your app so users aren’t jolted by a sudden change in design. Part of successfully streamlining a user’s experience is customizing your integrations and their authentication process to feel like they’ve never left your application at all. A pop-up window or modal is generally the easiest way to accomplish this, as users won’t be redirected to a new URL or browser location.
      </Typography>
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Identify Your Type of User 
      </Typography>
      <Typography align="center" className={classes.regText}>
        A good question to ask yourself prior to building out your auth flow is, “What type of user is going to be authenticating within your app?” If your application requires CRM integrations, then it’s entirely feasible that your users will be authenticating admin accounts that require a different level of security when going through the auth process. If your application is using cloud storage integrations to allow for users to authenticate the service of their choice, admin accounts are probably not something you will have to take into account as much. Determining your primary user’s use case is imperative before setting out to build the authentication flow, as it will help you to prioritize the steps taken by your application once a user is all set up and authenticated.
      </Typography>
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Types of Authentication 
      </Typography>
      <Typography align="center" className={classes.regText}>
        In order to responsibly address security concerns, you will be tasked with finding a way to securely keep track of usernames, passwords, keys, and refresh keys for&nbsp;<Link href="https://kloudless.com/blog/2019/02/15/popular-cloud-apps-authentication-schemes-oauth-2-0-api-keys-and-more?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">API authentication</Link>.&nbsp;For basic authentication, user credentials are sent with no encryption during transmission, so confidentiality is lowest and user credentials must be encrypted before being stored on your database’s side. OAuth will allow users to authenticate third-party service integrations through a protocol that does not necessitate the sharing of credentials with your application. OAuth works on a system of assigning credential tokens that verify a user’s identity once they have authenticated with the service of their choice. OAuth2.0 is a newer protocol that uses HTTPS and introduced a system of ‘refreshing tokens’ that will cause authentication to expire unless they are refreshed. Managing those refresh tokens becomes another task for your application to undertake, for the sake of keeping your users authenticated while they are still within your application’s ecosystem. OAuth2.0 will also require logic to handle bearer tokens and access tokens. JWT (JSON Web Token) authentication may be used in OAuth, as well. Popular cloud services that use OAuth include Google Drive,&nbsp;<Link href="https://kloudless.com/blog/2019/03/18/five-hidden-obstacles-with-the-salesforce-streaming-api?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">Salesforce</Link>, and Outlook Calendar.
      </Typography>
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Types of Authentication 
      </Typography>
      <Typography align="center" className={classes.regText}>
        With basic auth, you will be tasked with encrypting and decrypting user credentials when sent to and from the database. There are many external packages to handle this process, such as bcrypt, but this process is still subject to far more security concerns than using OAuth or OAuth 2. Managing refresh tokens is a whole other hurdle to clear if you are using the latter of these 2 services. Initially, you will need to receive the access token that verifies a user has in fact been authenticated. Following that, you will have to manage their refresh token for the lifespan of their session. To keep a user from having to re-authenticate with their third-party service in your application, you will have to manually refresh the tokens as their sessions continue. Refresh tokens contain sensitive user data, so it is best to keep them encrypted with 256-bit encryptions while in your data store. Users should then be given the key to decrypt these tokens when necessary.
      </Typography>
    </Container>
    <CardMedia
      component="img"
      alt="concert"
      height="450"
      src={concert}
      title="concert"
      className={classes.spacing}
    />
    <Container maxWidth="md" className={classes.spacing}>
    <Divider className={classes.spacing} variant="middle" />
    <Typography variant="h2" align="center" className={classes.section}>
        Section 4: API Events
      </Typography>
      <Typography variant="h4" align="center" className={classes.header}>
        Simplifying Your API Event Strategy
      </Typography>
      <CardMedia
        component="img"
        alt="api events"
        height="250"
        src={events}
        title="api events"
        className={classes.spacing}
      />
      <Typography align="center" variant="h5" className={classes.subHeader}>
        In an application with multiple third-party integrations, actions will be performed across cloud services that your users need to be alerted to. One of the most important pieces of your integration strategy is planning ahead to how you will deal with changes at your endpoints and the events that need relaying to alert users to those changes.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Modern applications leverage events to keep their systems informed, as well as give users a by-the-minute account of changes that occurred, even if previously unbeknownst to the user. Let’s say a user sets up an admin account in DropBox to allow other users to upload files to that folder from their own personal accounts. If everyone involved is using DropBox, it’s safe to assume that the service itself is aware of changes within its own structure. In many cases, a platform or service will have webhooks on each endpoint to log the events or changes that occurred and relay them to all parties involved. In the case of DropBox, the admin user and the user uploading to the shared folder would both receive notifications that the upload had either succeeded or failed. 
      </Typography>
      <Typography align="center" className={classes.regText}>
        However, when building an application where you wish to provide functionality for separate systems to interact somehow, events won’t automatically log as they do within a single ecosystem. Let’s say you have the same admin user who wishes to use a DropBox folder for shared uploads, only now you wish to allow users with Google Drive to select files in their account and upload the file to DropBox. The webhooks that exist in DropBox will still work, however, it won’t automatically alert users in your application of these changes. You are now tasked with finding a way to harness and relay those alerts to users in your own application’s ecosystem.
      </Typography>
      <Typography align="center" className={classes.regText}>
        There are two popular ways to go about handling API events: Webhooks, which we briefly touched on above, and polling. 
      </Typography>
      <Divider className={classes.spacing} variant="middle" />
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Polling
      </Typography>
      <Typography align="center" className={classes.regText}>
        Polling is a relatively simple way to go about handling events. The process is to send a request for new events (more specifically, Create, Retrieve, and Delete events which trigger a change in data) at a predetermined frequency and then wait for the endpoint to respond. If the case that the endpoint doesn’t respond, that signals that there are no new events to log or share.
      </Typography>
      <CardMedia
        component="img"
        alt="event polling"
        src={polling}
        title="event polling"
        width="350"
        height="250"
        className={classes.spacing}
      />
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Webhooks
      </Typography>
      <Typography align="center" className={classes.regText}>
        Webhooks are a means to give your application a way to consuming new event data from an endpoint. Unlike polling, instead of repeatedly sending requests for new events, you send an endpoint a URL, which your application then closely monitors. If a new event occurs within the endpoint app, it logs and then posts the event data to your specified URL, allowing your application to update in real-time.
      </Typography>
      <CardMedia
        component="img"
        alt="webhooks"
        src={webhooks}
        title="webhooks"
        width="350"
        height="250"
        className={classes.spacing}
      />
      <Divider className={classes.spacing} variant="middle" />
      <Typography align="center" className={classes.regText}>
        When planning your event handling in your application, it is wise to try to use webhooks at any point possible for a few, very important, reasons. First, webhooks are triggered by any change in data, ensuring that you will only receive an event when an action has occurred. Polling checks for changes in data at a predetermined frequency, therefore you will inevitably have calls to the endpoint where data has not changed. This results in wasted calls, which can add server load and cost more money if you are paying per API call. Secondly, webhooks are sent in real-time, which means that the event data is never old. If polling, your event data will have a best-case scenario of being in real-time, and a worst-case scenario of being upwards of a day old. If your application requires real-time events for something as important as syncing data between multiple third-party services, polling can throw a rather large monkey wrench into your application flow and cause a sizeable delay in data syncing.
      </Typography>
      <Typography align="center" className={classes.regText}>
        New tools like&nbsp;<Link href="https://kloudless.com/blog/2019/12/03/announcing-the-kloudless-aws-eventbridge-partnership?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">AWS Eventbridge</Link>&nbsp;aim to simplify the process of tracking events by providing an approach to activity monitoring that takes the burden away from the APIs that&nbsp;<Link href="https://kloudless.com/blog/2018/04/18/lessons-ive-learned-deploying-saas-software-on-prem?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">SaaS applications</Link>&nbsp;connect to. Amazon’s EventBridge is a serverless event bus that simplifies connecting applications together using data from your own applications, Software-as-a-Service (SaaS) applications, and AWS services. EventBridge provides a stream of real-time data from event sources, such as Kloudless, and then delivers that data to targets within AWS, such as AWS Lambda. This helps a wide range of applications, but none more so than apps requiring data sync and data collaboration. CASB, DLP, and eDiscovery applications can then be easily built to adhere to an&nbsp;<Link href="https://kloudless.com/blog/2019/06/21/did-you-get-that-thing-i-sent-you-the-rise-of-event-driven-architecture?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">Event-Driven Architecture</Link>&nbsp;that listens for webhooks across a series of CRUD endpoints.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Sadly, not all APIs support webhooks, but the trend is moving towards better coverage of endpoints due to the simple nature of implementing webhooks. The code is minimal compared to the logic required to implement polling, and the benefits far outweigh those of its alternative. When planning your integration strategy, make sure to take events and the functionality provided by the APIs endpoints into account.
      </Typography>
      </ Container>
      <CardMedia
      component="img"
      alt="api log"
      height="450"
      src={logs}
      title="api log"
      className={classes.spacing}
    />
      <Container maxWidth="md" className={classes.spacing}>
      <Divider className={classes.spacing} variant="middle" />
      <Typography variant="h2" align="center" className={classes.section}>
        Section 5: Logging and Monitoring
      </Typography>
      <Typography variant="h4" align="center" className={classes.header}>
        Keep Your Integrations Happy and Healthy with Logging and Monitoring
      </Typography>
      <CardMedia
        component="img"
        alt="api logging"
        height="250"
        src={logging}
        title="api logging"
        className={classes.spacing}
      />
      <Typography align="center" variant="h5" className={classes.subHeader}>
        There is nothing that will drive away users like broken integrations. Ensure the working status of your application by taking the time to incorporate thorough logging and monitoring coverage.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Logging and monitoring are essential parts of building and maintaining applications with cloud-service integrations. To make logging as effective as possible, it should reflect the state of your application and be able to scale alongside it. When going into planning out your logging and monitoring for your application, you should keep these questions in mind:
      </Typography>
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        What messages are you logging and are they meant for the end-users?
      </Typography>
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Are you addressing troubleshooting in the log messages and are they actionable?
      </Typography>
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Are you including pertinent data in your log messages, such as a timestamp, severity of the issue, meaningful messages, and additional troubleshooting information?
      </Typography>
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Do your log messages contain sensitive user data or security-related data?
      </Typography>
      <Typography variant="h5" align="center" className={classes.headerAlt}>
        Have you set up an alert system on incoming logs?
      </Typography>
      <Typography align="center" className={classes.regText}>
        Keeping these questions in mind when going into your logging and monitoring strategy can help you to keep from having to go back and fix issues with your logs as they arise. You are always able to go about building your own logging and monitoring tools, but consider using something like EFK stack (Elasticsearch, Fluentd, and Kibana), to make your DevOps team’s lives easier. These tools are employed in conjunction to handle large-scale data analysis and deliver results in real-time. They are able to employ complex search queries over data and enable open API-based integration with other tools. This will allow you to spend more time analyzing your logs to help the long-term health of your application, instead of spending considerable time and money implementing your own complex logging and monitoring systems.
      </Typography>
      <Typography align="center" className={classes.regText}>
        One issue to keep in mind while crafting your logging and monitoring strategy is&nbsp;<Link href="https://kloudless.com/blog/2019/01/23/api-requests-at-scale-rate-limits-and-quotas?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">API rate limits</Link>. Typically, rate-limit algorithms work by tracking the number of requests over a short period of time, such as a second or a minute. If these requests begin to exceed the threshold, we begin to see error responses with the 429 status code based on RFC 6585. This will include the Retry-After header to indicate how long the client should wait (in seconds) before retrying the API requests. For example, SharePoint Online recommends a specific User-Agent format and certain headers in API requests to ensure a more favorable rate limit thresholds.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Ensuring that you have studied each API’s protocol for rate limits will result in much fewer headaches down the line for your developers and end-users.
      </Typography>
      </Container>
      <CardMedia
      component="img"
      alt="future"
      height="450"
      src={future}
      title="future"
      className={classes.spacing}
    />
      <Container maxWidth="md" className={classes.spacing}>
      <Divider className={classes.spacing} variant="middle" />
      <Typography variant="h2" align="center" className={classes.section}>
        Section 6: Future Development
      </Typography>
      <Typography variant="h4" align="center" className={classes.header}>
        What If There Was An Easier Way?
      </Typography>
      <CardMedia
        component="img"
        alt="kloudless"
        height="300"
        src={kloudless}
        title="kloudless"
        className={classes.spacing}
      />
      <Typography align="center" variant="h5" className={classes.subHeader}>
        Kloudless'&nbsp;<Link href="https://kloudless.com/glossary-terms/unified-api?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">Unified APIs</Link>&nbsp;can handle your needs at the moment, as well as ensure that you are covered for the future. Planning out an integration strategy for your application is a time-consuming and arduous process. At any point, carefully planned out strategies can backfire, leaving you scrambling to implement a new gameplan. 
      </Typography>
      <Typography align="center" className={classes.regText}>
        Here at Kloudless, we take all of these issues into account when building our Unified APIs so you don’t have to worry about the&nbsp;<Link href="https://kloudless.com/blog/2019/07/19/integration-pains-a-report-on-the-state-of-application-integrations?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">headaches of app integrations</Link>.
      </Typography>
      <Typography align="center" className={classes.regText}>
        At its base level, Kloudless can help your developers integrate as many cloud services as your app needs in one fell swoop. Instead of dealing with the headache of learning the ins-and-outs of multiple services and the problems that may arise from their inclusion into your application, your developers can code to access a single API:&nbsp;<Link href="https://kloudless.com?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">Kloudless</Link>.
      </Typography>
      <Typography align="center" className={classes.regText}>
        A common problem that sidelines applications is dealing with unforeseen circumstances. Kloudless Unified APIs aim to alleviate the pain of these issues by making sure that your application doesn’t have to suffer from downtime or broken functionality as a result of factors that are out of your control. When APIs change the way they return data, we handle that. When documentation requires that your developers learn a new function of the required storage API, we handle that. When a new version of the API launches, we handle that. Essentially, all your future needs are taken care of after you integrate our Unified API into your codebase. We take the legwork out of API integration so that your developers can focus on more important things; like the functionality your application needs to set itself apart from the competition.
      </Typography>
      <Typography align="center" className={classes.regText}>
        We also add new cloud services to our APIs all the time, so if a newer and desired service comes along that your users need, chances are, we’re hard at work incorporating it into our Unified API so you can allow your users to access it with no work at all on your part.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Because, at the end of the day, API integrations to cloud services aren’t what makes your application special or different. It’s a necessary piece of functionality in your greater vision, but it’s not what you should be endlessly laboring over or getting behind schedule on.		
      </Typography>
      <Typography align="center" className={classes.regText}>
        Your application is special because of what it does differently. You’re looking to change minds; change how industries work; maybe even change the world. Let your developers focus on those things, while we focus on your cloud storage, cloud calendar, or cloud CRM integrations.
      </Typography>
      <Typography align="center" className={classes.regText}>
        A proper integration strategy is key to making it through your product lifecycle. We’re looking forward to what you’re building, and we can’t wait to help your goals materialize quickly with our Unified APIs. 
      </Typography>
      </ Container>
      <CardMedia
      component="img"
      alt="road"
      height="450"
      src={road}
      title="road"
      className={classes.spacing}
    />
      <Container maxWidth="md" className={classes.spacing}>
      <Divider className={classes.spacing} variant="middle" />
      <Typography variant="h2" align="center" className={classes.section}>
        Want Even More?
      </Typography>
      <Typography align="center" className={classes.regText}>
        Download a PDF version of this guide with even more information to help your application differentiate itself from the competition.
      </Typography>
        <Button variant="contained" color="primary" className={classes.spacing} href="https://kloudless.com/resources/ebooks/integration-strategy-guide?utm_campaign=Unified_API_PIllar&utm_source=Page&utm_medium=Direct&utm_content=reflink" target="_blank">
          Download Now
      </Button>
      </Container>
      <CardMedia
      component="img"
      alt="bridge"
      height="450"
      src={bridge}
      title="bridge"
      className={classes.bottomSpacing}
    />
    </div>
  );
}

export default App;
