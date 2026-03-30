import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import AediaXChatBot from "./components/AediaXChatBot";

// Lazy Pages
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const Categories = lazy(() => import("./pages/Categories"));
const Tutorials = lazy(() => import("./pages/Tutorials"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));

// Platform Pages
const AIEngineering = lazy(() => import("./pages/platform/AIEngineering"));
const CloudNative = lazy(() => import("./pages/platform/CloudNative"));
const EdgeComputing = lazy(() => import("./pages/platform/EdgeComputing"));
const Cybersecurity = lazy(() => import("./pages/platform/Cybersecurity"));
const Web3 = lazy(() => import("./pages/platform/Web3"));

// Resources Detail Pages
const Documentation = lazy(() => import("./pages/resources/Documentation"));
const TutorialsDetail = lazy(() => import("./pages/resources/TutorialsDetail"));
const CaseStudies = lazy(() => import("./pages/resources/CaseStudies"));
const Whitepapers = lazy(() => import("./pages/resources/Whitepapers"));
const APIReference = lazy(() => import("./pages/resources/APIReference"));

// Company Pages
const AboutUs = lazy(() => import("./pages/company/AboutUs"));
const Careers = lazy(() => import("./pages/company/Careers"));
const BlogDetail = lazy(() => import("./pages/company/BlogDetail"));
const Press = lazy(() => import("./pages/company/Press"));
const Contact = lazy(() => import("./pages/company/Contact"));

// Legal Pages
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/legal/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const Security = lazy(() => import("./pages/legal/Security"));
const Compliance = lazy(() => import("./pages/legal/Compliance"));

function App() {
  return (
    <Router>
      <Navbar />

      <Suspense
        fallback={
          <Box sx={{ minHeight: "80vh" }}>
            <PageLoader />
          </Box>
        }
      >
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />

          {/* Platform Routes */}
          <Route path="/platform/ai-engineering" element={<AIEngineering />} />
          <Route path="/platform/cloud-native" element={<CloudNative />} />
          <Route path="/platform/edge-computing" element={<EdgeComputing />} />
          <Route path="/platform/cybersecurity" element={<Cybersecurity />} />
          <Route path="/platform/web3" element={<Web3 />} />

          {/* Resources Detail Routes */}
          <Route path="/resources/docs" element={<Documentation />} />
          <Route path="/resources/tutorials" element={<TutorialsDetail />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/api" element={<APIReference />} />

          {/* Company Routes */}
          <Route path="/company/about" element={<AboutUs />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/blog" element={<BlogDetail />} />
          <Route path="/company/press" element={<Press />} />
          <Route path="/company/contact" element={<Contact />} />

          {/* Legal Routes */}
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<TermsOfService />} />
          <Route path="/legal/cookies" element={<CookiePolicy />} />
          <Route path="/legal/security" element={<Security />} />
          <Route path="/legal/compliance" element={<Compliance />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      
      <AediaXChatBot />
      <Footer />
    </Router>
  );
}

export default App;