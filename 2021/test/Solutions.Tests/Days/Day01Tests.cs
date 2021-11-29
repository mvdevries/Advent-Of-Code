using System.Diagnostics;
using NUnit.Framework;
using Solutions.Days;

namespace Solutions.Tests.Days;

public class Day01Tests
{
    private readonly Day01 _day01 = new();

    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void HandTestPart1()
    {
        var answer = _day01.Part1();
        Debug.WriteLine(answer);
    }

    [Test]
    public void Part1()
    {
        var answer = _day01.Part1();
        Assert.Equals(answer, "");
    }

    [Test]
    public void HandTestPart2()
    {
        var answer = _day01.Part2();
        Debug.WriteLine(answer);
    }

    [Test]
    public void Part2()
    {
        var answer = _day01.Part2();
        Assert.Equals(answer, "");
    }
}
