import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
  HomePage,
  ProfessorPage,
  WorkPage,
  RevizePage,
  ChatPage,
  JohnDoeChatPage,
  TasksPage,
  ContactsPage,
} from "../pages";
import ActivityPage from "../pages/activityPage";
import UploadPage from "../pages/uploadPage";
import { AppRoutes } from "./types";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.HOME} element={<HomePage />} />
        <Route path={AppRoutes.WORK} element={<WorkPage />} />
        <Route path={AppRoutes.PROFESSORS} element={<ProfessorPage />} />
        <Route path={AppRoutes.REVIZE} element={<RevizePage />} />
        <Route path={AppRoutes.CHAT} element={<ChatPage />} />
        <Route path={AppRoutes.JOHNDOE} element={<JohnDoeChatPage />} />
        <Route path={AppRoutes.DOCUMENTS} element={<UploadPage />} />
        <Route path={AppRoutes.ACTIVITY} element={<ActivityPage />} />
        <Route path={AppRoutes.TASKS} element={<TasksPage />} />
        <Route path={AppRoutes.CONTACTS} element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
