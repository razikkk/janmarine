import React, { useEffect, useState } from "react";
import { getCareerApplications } from "../api/pageContent";

interface CareerApplication {
  _id: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  message?: string;
  cvFile?: string;
  createdAt: string;
}

const CareerApplications: React.FC = () => {
  const [applications, setApplications] = useState<CareerApplication[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await getCareerApplications();
        setApplications(res.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Career Applications</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Job Title</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">CV</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr key={app._id} className="border-t">
                  <td className="p-3">{app.name}</td>
                  <td className="p-3">{app.email}</td>
                  <td className="p-3">{app.phone}</td>
                  <td className="p-3">{app.jobTitle}</td>
                  <td className="p-3">{app.message || "—"}</td>
                  <td className="p-3">
                    {app.cvFile ? (
                      <a
                        href={app.cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    ) : (
                      "No File"
                    )}
                  </td>
                  <td className="p-3">
                    {new Date(app.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-3 text-center text-gray-500">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CareerApplications;
