import ALL_List from "@/app/_components/ALL_List";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";

export default function Page() {
   return (
    <main>
      <div className="flex flex-col">
        <div className="mb-10 text-lg text-primary-600">
          <div className="flex justify-center mt-2 md:mt-6">
            <Suspense fallback={<Spinner />}>
              <ALL_List />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
