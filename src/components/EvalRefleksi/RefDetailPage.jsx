import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import RefleksiJSON from "./Data/RefleksiJSON";
import myTheme from "./Data/Theme";
import RefleksiService from "../../services/refleksi.service";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const RefDetailPage = () => {
  const { refId } = useParams();
  const survey = new Model(RefleksiJSON);
  survey.applyTheme(myTheme)
  survey.focusFirstQuestionAutomatic = false;

  const sendToServer = useCallback((sender) => {
    RefleksiService.pushRefleksi(refId, sender.data)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error);
      });
  }, []);
  
  survey.onComplete.add(sendToServer);

  return (
    <Survey model={survey} />
  )
}

export default RefDetailPage