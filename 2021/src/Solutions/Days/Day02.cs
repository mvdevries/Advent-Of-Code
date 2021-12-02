using Solutions.Base;
using Solutions.Extensions;

namespace Solutions.Days;

public class Day02: IDay
{
    public int Part1(string input)
    {
        var horizonal = 0;
        var depth = 0;
        var parts = input.ToPartsList();
        foreach (var part in parts)
        {
            if (part.Item1 == "forward")
            {
                horizonal += part.Item2;
            }

            if (part.Item1 == "down")
            {
                depth += part.Item2;
            }

            if (part.Item1 == "up")
            {
                depth -= part.Item2;
            }
        }

        return horizonal * depth;
    }

    public int Part2(string input)
    {
        var horizonal = 0;
        var depth = 0;
        var aim = 0;
        var parts = input.ToPartsList();
        foreach (var part in parts)
        {
            if (part.Item1 == "forward")
            {
                horizonal += part.Item2;
                depth += (aim * part.Item2);
            }

            if (part.Item1 == "down")
            {
                aim += part.Item2;
            }

            if (part.Item1 == "up")
            {
                aim -= part.Item2;
            }
        }

        return horizonal * depth;
    }
}
