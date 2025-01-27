import { queryAdvisorCollection } from "@/lib/gql/staffs";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { AdvisorProfile } from "../types";
import { AdvisorCard } from "./AdvisorCard";
import { AdvisorProfileModal } from "./AdvisorProfileModal";
import { FilterIs } from "@/__generated__/graphql";

interface AdvisorProps {
  categoryId: string;
}

export const Advisor = ({ categoryId }: AdvisorProps): JSX.Element => {
  const { loading, error, data } = useQuery(queryAdvisorCollection, {
    variables: {
      filter: {
        category_id: {
          eq: categoryId,
        },
        deleted_at: {
          is: FilterIs.Null,
        },
      },
    },
  });

  const [isAdvisorProfileModalVisible, setIsAdvisorProfileModalVisible] =
    useState(false);
  const [selectedAdvisorProfile, setSelectedAdvisorProfile] =
    useState<AdvisorProfile>();

  const handleAdvisorCardClick = (id: string) => {
    setIsAdvisorProfileModalVisible(true);

    const selectAdvisorProfile = data?.staffsCollection?.edges.find(
      (item) => item.node.id === id
    );

    setSelectedAdvisorProfile(selectAdvisorProfile?.node);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div className="bg-primary py-24">
      <div className="max-w-[1000px] m-auto px-4">
        <h2 className="text-secondary font-semibold text-5xl sm:text-6xl text-center mb-16">
          Advisor
        </h2>

        <div className="text-secondary mb-16">
          <h3 className="text-4xl mb-8">“サッカー以外でも交流していきます”</h3>

          <p className="mb-4">
            このようにサッカーに関係した専門家との交流をはじめ、サッカー以外の体験や、交流などを通じて様々な人と関わるなかで、社会性を身につけ、人としての成長に繋げていきます。
          </p>

          <p className="mb-4">
            人としての成長がサッカーの上達を早め、人生の選択肢を増やす事になるとクラブでは考えています。
          </p>

          <p className="mb-4">
            一見、サッカーとは関係のないような活動にも一生懸命、前向きに取り組める選手を待っています。
          </p>
        </div>

        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]">
          {data?.staffsCollection?.edges.map((advisor) => (
            <AdvisorCard
              key={advisor.node.id}
              advisorProfile={advisor.node}
              onClick={handleAdvisorCardClick}
            />
          ))}
        </div>

        {selectedAdvisorProfile && (
          <AdvisorProfileModal
            visible={isAdvisorProfileModalVisible}
            advisorProfile={selectedAdvisorProfile}
            onClose={() => setIsAdvisorProfileModalVisible(false)}
          />
        )}
      </div>
    </div>
  );
};
