// import TopMenu from "@/components/TopMenu"; // Adjust the import based on your project structure
import TopMenu from "@/components/newUi/topMenu";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopMenu isEmpty={true} />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
