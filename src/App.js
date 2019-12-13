import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
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
    minHeight: 400,
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
    marginBottom: 40
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
  const preventDefault = event => event.preventDefault();
  return (
    <div>
    <AppBar 
      position="static" 
      titleStyle={{verticalAlign:'middle'}}
    >
      <Toolbar>
      <Grid
        justify="space-between"
        container 
        spacing={24}
      >
      <Grid item>
        <Link href="https://www.kloudless.com">
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
        alt="working"
        height="250"
        src={work}
        title="working"
        className={classes.spacing}
      />
      <Typography align="center" variant="h5" className={classes.subHeader}>
        Maybe it’s something that will change the way people communicate; maybe it’s to revolutionize the workflow of a leading industry; maybe it’s an application to pioneer a new way of exchanging old family recipes. It doesn’t matter. You’re primed for success as long as your team can put together your vision and deliver it on time.
      </Typography>
      <Typography align="center" className={classes.regText}>
        As ideas are laid out, Kanban boards begin to fill up with Post-It notes, issue tracking software slowly amasses tickets, and now you’re left strategizing ways to make development easier and more swift. (Although really any programming language will do.) Your product roadmap begins its journey from initial user stories all the way to product launch, and your target persona begins to take shape. The beauty of this stage in an application’s lifecycle is creating a product story, whether you contribute to that as a product manager or as a developer.
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
    <Container maxWidth="md" className={classes.spacing}>
      <Typography variant="h2" align="center" className={classes.section}>
        Section 2: Planning Your Integration Strategy
      </Typography>
      <Typography variant="h4" align="center" className={classes.header}>
        These 3 steps will ensure you start your integration strategy on the right foot.
      </Typography>
      <CardMedia
        component="img"
        alt="feet"
        height="250"
        src={feet}
        title="feet"
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
        alt="build"
        height="250"
        src={build}
        title="build"
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
        alt="teach"
        src={teach}
        title="teach"
        className={classes.spacing}
      />
      <Typography align="center" className={classes.regText}>
        By laying out these specific use cases, you will already know the necessary integrations and subsequent functionality required of them when it comes time to start building your application based on your product roadmap. Small, but important, steps like these can make sure that everyone is on the same page when it comes time to finally build the connections necessary to fulfill the desired functionality in these use cases.
      </Typography>
      <Typography align="center" className={classes.regText}>
        Market research is key as well. Hopefully, you’ve set aside time to do your research before even beginning to think about building out integrations. Based on your role, as a technical product manager, growth product manager, data project manager, or business project manager, market research absolutely has to be a strength of your core competencies.
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
         <Link href="https://www.mindtheproduct.com/2016/10/the-biggest-challenge-for-product-managers/" onClick={preventDefault}>
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
        alt="change"
        height="250"
        src={change}
        title="change"
        className={classes.spacing}
      />
      <Typography align="center" className={classes.regText}>
        We’ve all had moments in our lives where instead of the new and mysterious, we side with something we feel ‘at home’ with. We love our security blankets. We rewatch the entirely of TV shows we love, despite new programming being more abundant than ever. We wear our favorite sweatshirt even though it has holes in it. Obviously, at points, we branch out and consume new media and buy new clothes, but those decisions take a concerted effort and aren’t nearly as quick or easy for us to decide on as just rewatching The Office or buying the same pair of New Balances we know we like.
      </Typography>
      <Typography align="center" className={classes.regText}>
        The same can be said for your potential users and their integration service of choice. A user with all of their files and documents in DropBox will likely forgo your application entirely if presented with an alternative cloud storage integration as the only available option. If a user keeps their schedule in Google Calendar, then the process of migrating their calendar over to Office 365 is an incredibly daunting task that most users will be tentative at best about to undertake. When it comes to CRM integrations, you don’t have the option of not supporting a service that your users are ingrained in. It is simply unacceptable to ask for your users to switch CRM providers in order to use your product. 
      </Typography>
      <Typography align="center" className={classes.regText}>
        All of these different scenarios of building integrations lead to one possible conclusion: The more integrations, the better. Why leave users by the wayside by simply choosing to support a single implementation of a service integration? 
      </Typography>
      <Typography align="center" className={classes.regText}>
        In a hypothetical situation where your application needs cloud storage integrations, providing only your personal choice of particular API integration is doing your application a disservice. Even though many of your potential users may be ingrained in DropBox, many of them will not be. A user that has all of their files, documents and potential workflow set up in Box, or Google Drive, or Egnyte is likely to forego your application entirely in search of another that provides the service integration they are comfortable with and deeply invested in. Never underestimate a user’s aversion to migrating their files and folders from one service provider to another. That process is essentially the internet’s version of moving houses. It’s exhausting.
      </Typography>
      <Typography align="center" className={classes.regText}>
        When given the chance, you should try to integrate with every popular integration service that you are capable of. Building software in need of file sync or folder sync is a daunting task for API developers, and generally leads teams in need of services that can accommodate these functionalities to the age-old question of Build Vs Buy.
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
        alt="tools"
        height="250"
        src={tools}
        title="tools"
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
        As service integrations grow, new features and functionality will inevitably be introduced. This can change the structure of endpoints or API calls entirely. It is possible that new parameters will be instituted, and return outputs may change their structure of metadata resulting in required maintenance on your side to deal with the new structure. For instance, Dropbox, SharePoint, or Microsoft OneDrive may change the way they display their folder trees, which means until you update to accommodate their newest version, your users’ workflow will be in peril. API authentication, JWT Token Exchange, or OAuth flow changes are also among those that occur frequently, so be on the lookout for those.
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
        Security vulnerabilities should always be at the front of every service provider’s mind. If found, these can result in changes to an endpoint or data return to combat any exploits that may have been discovered. As a consumer, you should always welcome these changes, as they are put in place to help keep your data safe. They do, however, usually result in functionality-breaking changes being introduced. If a security-exploit is discovered, you should expect to have to perform immediate maintenance on your connections to keep them both sound and functioning. Enterprise security compounds these needs, as they are especially malware or phishing attempts. Cloud CRM services are generally the most updated APIs, so expect a lot of data security changes if your application connects to these services.
      </Typography>
      <Divider className={classes.spacing} variant="middle" />
      <Typography align="center" className={classes.regText}>
        While not all of these changes listed above will break your integration functionality every time they are introduced, you should always play it safe and expect them to. If a provider lets you know of a planned API change coming in the near future, plan to dedicate time and resources to making sure your connections stay sound once the changes are released. Scrambling to fix broken integrations because you didn’t pay close enough attention to an API’s versioning notes or planned announcements will cause you to implement sloppy or rushed fixes down the line, which will almost certainly upset your user base. Having a dedicated team for integration maintenance is also a very logical possibility, as they can spend much of their energy researching upcoming API changes and preparing to implement fixes quickly and efficiently.
      </Typography>
    </Container>
    </div>
  );
}

export default App;
