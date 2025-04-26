import { Parser } from "json2csv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { user, id } = {
    user: request.nextUrl.searchParams.get("user"),
    id: request.nextUrl.searchParams.get("id"),
  };

  if (user !== "admin") {
    return new NextResponse("You don't have access to this feature", {
      status: 400,
    });
  }

  if (id !== "0000") {
    return new NextResponse("Your id doesn't allow you to use this feature", {
      status: 400,
    });
  }

  const mockData = {
    code: "01",
    function: "delete",
    data: "OP0001",
    date: "20250304",
  };

  try {
    const parser = new Parser();
    const csv = parser.parse(mockData);
    console.log(csv);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="data.csv"',
      },
    });
  } catch (err) {
    console.error(err);
  }

  // return new NextResponse(csv, {
  //   status: 200,
  //   headers: {
  //     "Content-Type": "text/csv",
  //     "Content-Disposition": 'attachment; filename="data.csv"',
  //   },
  // });
}
