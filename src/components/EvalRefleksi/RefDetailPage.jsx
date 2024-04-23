import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import RefleksiJSON from "./Data/RefleksiJSON";
import myTheme from "./Data/Theme";
import RefleksiService from "../../services/refleksi.service";
import { useParams } from "react-router-dom";

const RefDetailPage = () => {
  const { refId } = useParams();
  const survey = new Model(RefleksiJSON);
  survey.applyTheme(myTheme)
  survey.focusFirstQuestionAutomatic = false;

  const sendToServer = useCallback((sender) => {
    // RefleksiService.pushRefleksi(refId, sender.data)
    console.log(sender.data);
  }, []);
  
  survey.onComplete.add(sendToServer);

  return (
    <Survey model={survey} />
  )
}

export default RefDetailPage