import axiosInstance from "./axiosInstance";
import tokenInstance from "./tokenInstance";

import { ApiResponse } from "types/common";

import { Club, ClubRecruit } from "types/club";

// 동아리 리스트 가져오기
export const getClubs = async (
  category: string,
): Promise<ApiResponse<Club[]>> => {
  if (category != "전체") {
    const response = await axiosInstance.get<ApiResponse<Club[]>>(
      `/api/clubs?category=${category}`,
    );
    return response.data;
  } else {
    const response = await axiosInstance.get<ApiResponse<Club[]>>(`/api/clubs`);
    return response.data;
  }
};

// 동아리 모집공고글 가져오기
export const getClubRecruit = async (
  clubId: string,
): Promise<ApiResponse<ClubRecruit>> => {
  const response = await axiosInstance.get<ApiResponse<ClubRecruit>>(
    `/api/clubs/clubId=${clubId}`,
  );
  return response.data;
};

// 동아리 모집 공고 등록
export const postClubRecruit = async (
  clubId: number,
  content: string,
  images: File[],
): Promise<ApiResponse<number>> => {
  const jsonData = {
    content,
  };

  const formData = new FormData();

  const jsonBlob = new Blob([JSON.stringify(jsonData)], {
    type: "application/json",
  });
  formData.append("request", jsonBlob);
  images.forEach((image) => formData.append("images", image));

  const response = await tokenInstance.post<ApiResponse<number>>(
    `/api/clubs/${clubId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

// 동아리 모집 공고 수정
export const putClubRecruit = async (
  clubId: number,
  content: string,
  images: File[],
): Promise<ApiResponse<number>> => {
  const jsonData = {
    content,
  };

  const formData = new FormData();

  const jsonBlob = new Blob([JSON.stringify(jsonData)], {
    type: "application/json",
  });
  formData.append("request", jsonBlob);
  images.forEach((image) => formData.append("images", image));

  const response = await tokenInstance.post<ApiResponse<number>>(
    `/api/clubs/${clubId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
