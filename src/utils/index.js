export const dummy1 = [
  {
    str_num: "DOC001",
    name: "Dr. Juan Carlos",
    url_image: "",
  },
  {
    str_num: "1234567890123456",
    name: "giroud",
    url_image: "",
  },
  {
    str_num: "1423442341325678",
    name: "testingDokter",
    url_image: "",
  },
  {
    str_num: "DOC002",
    name: "Dr. Anto",
    url_image: "",
  },
];

export const dummy2 = [
  {
    user_id: "1234567890123456",
    session: [
      {
        id: 1,
        day_id: 1,
        day: "Monday",
        time_id: 1,
        time: "09.00 - 12.00",
      },
      {
        id: 2,
        day_id: 2,
        day: "Tuesday",
        time_id: 2,
        time: "13.00 - 16.00",
      },
    ],
  },
  {
    user_id: "1423442341325678",
    session: [
      {
        id: 4,
        day_id: 3,
        day: "Wednesday",
        time_id: 1,
        time: "09.00 - 12.00",
      },
    ],
  },
  {
    user_id: "DOC001",
    session: [
      {
        id: 7,
        day_id: 5,
        day: "Friday",
        time_id: 1,
        time: "09.00 - 12.00",
      },
    ],
  },
];

export function joinResponse(res1, res2) {
  const namesDict = {};
  const times = new Array(21).fill("-");
  times[20] = "CLOSED";

  if (res1) {
    for (let item of res1) {
      namesDict[item.str_num] = item.name;
    }
  }

  if (res2) {
    for (let item of res2) {
      for (let session of item.session) {
        let nama = namesDict[item.user_id];
        if (nama === undefined) {
          nama = item.user_id;
        }
        times[(session.time_id - 1) * 7 + (session.day_id - 1)] = nama;
      }
    }
  }
  const result = [times.slice(0, 7), times.slice(7, 14), times.slice(14, 21)];
  return result;
}

export function mergeData(test1, test2) {
  if (!test1 || !test2) {
    return [];
  }
  const mergedData = test2.map((item) => {
    const user = test1.find((user) => user.str_num === item.user_id);
    return {
      ...item,
      user_id: user.str_num,
      name: user.name,
      url_image: user.url_image,
    };
  });
  return mergedData;
}

export function extractUniqueUsers(list) {
  const users = new Set();
  list.map((obj) => users.add(obj.name));
  return Array.from(users);
}
