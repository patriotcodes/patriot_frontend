
import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import MyButton from "@/componets/button";
import OfficerSearch from "@/componets/OfficerSearch";
import RegistrationCheck from "@/componets/RegistrationCheck";
import AddNewCall from "@/componets/AddNewCall";
import AddNewCitation from "@/componets/AddNewCitation";
import AddNewPoliceReport from "@/componets/AddNewPoliceReport";
import CurrentCallsTable from "@/componets/CurrentCallsTable";
// Put your API key here
builder.init("c06c37e73e634d7b85283da879e207cb");
import { Builder } from '@builder.io/react';

Builder.registerComponent(MyButton, {
  name: 'MyButton',
  inputs: [
    {
      name: 'label',
      type: 'string',
      defaultValue: 'Click Me',
    },
    {
      name: 'onClick',
      type: 'action',
    },
  ],
});

Builder.registerComponent(OfficerSearch, {
  name: 'OfficerSearch', // This name should match what you use in Builder.io
  // Define any inputs your component needs here, if applicable
});

Builder.registerComponent(RegistrationCheck, {
  name: 'Registration Check', // This name should match what you use in Builder.io
  // Define any inputs your component needs here, if applicable
});

Builder.registerComponent(AddNewCall, {
  name: 'New Call', // This name should match what you use in Builder.io
  // Define any inputs your component needs here, if applicable
});
Builder.registerComponent(AddNewCitation, {
  name: 'New Citation ', // This name should match what you use in Builder.io
  // Define any inputs your component needs here, if applicable
});

Builder.registerComponent(AddNewPoliceReport, {
  name: 'New Report ', // This name should match what you use in Builder.io
  // Define any inputs your component needs here, if applicable
});

Builder.registerComponent(CurrentCallsTable, {
  name: 'Calls ', // This name should match what you use in Builder.io
  // Define any inputs your component needs here, if applicable
});


export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Check if running on client side
    if (typeof window === 'undefined') {
      return;
    }

    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      if (content?.data.title) {
        document.title = content.data.title;
      }
    }

    fetchContent();
  }, []);  // Removed dependency on window.location.pathname

  if (notFound && !isPreviewingInBuilder) {
    return <div>404: Page Not Found</div>;  // Make sure to import or define FourOhFour
  }
 
  
  return (
    <>
      <BuilderComponent model="page" content={content} />
    </>
  );
}
